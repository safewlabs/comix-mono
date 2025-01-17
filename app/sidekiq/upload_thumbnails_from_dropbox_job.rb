# frozen_string_literal: true

require "open-uri"

class UploadThumbnailsFromDropboxJob
  include Sidekiq::Job

  def perform(token)
    store = Store.find 64
    client = DropboxApi::Client.new(token)
    files_list = client.list_folder("/COMIX files")
    unsupported_images = []
    store.products.each do |product|
      puts product.name
      comic_result = files_list.entries.select { |entry| entry.name.include?(product.name) }
      next if comic_result.blank?
      comic = comic_result.first
      thumbnail_batch = client.get_thumbnail_batch([comic.path_lower], size: :w640h480)
      if thumbnail_batch.entries.first.class.eql?(DropboxApi::Errors::UnsupportedImageError)
        unsupported_images.push(comic.name)
      else
        image_string = thumbnail_batch.entries.first.thumbnail
        image = decoded_image(image_string, comic.name)
        product.update(issue_cover: image)
      end
    end
  end
end

def decoded_image(image_string, comic_name)
  decoded_data = Base64.decode64(image_string)
  {
    io:           StringIO.new(decoded_data),
    content_type: "image/jpeg",
    filename:     "#{comic_name}.jpg"
  }
end
