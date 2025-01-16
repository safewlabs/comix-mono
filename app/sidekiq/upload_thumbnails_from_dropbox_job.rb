# frozen_string_literal: true

require "open-uri"

class UploadThumbnailsFromDropboxJob
  include Sidekiq::Job

  def perform(token)
    store = Store.find 1
    client = DropboxApi::Client.new(token)
    files_list = client.list_folder("/COMIX files")
    store.products.each do |product|
      next if product.file_attachment.present?
      puts product.name
      comic_result = files_list.entries.select { |entry| entry.name.include?(product.name) }
      next if comic_result.blank?
      comic = comic_result.first
      thumbnail_batch = client.get_thumbnail_batch(comic.id, size: :w640h480)
      image_string = thumbnail_batch.entries.first.thumbnail
      image = decoded_image(image_string, comic_name)
      product.update(issue_cover: image)
    end
  end
end

def decoded_image(image_string, comic_name)
  decoded_data = Base64.decode64(image_string.split(",")[1])
  {
    io:           StringIO.new(decoded_data),
    content_type: "image/jpeg",
    filename:     "#{comic_name}.jpg"
  }
end
