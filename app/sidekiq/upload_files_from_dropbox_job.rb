# frozen_string_literal: true

require "open-uri"

class UploadFilesFromDropboxJob
  include Sidekiq::Job

  def perform(token)
    store = Store.find 64
    client = DropboxApi::Client.new(token)
    files_list = client.list_folder("/COMIX files")
    store.products.each do |product|
      next if product.file_attachment.present?
      puts product.name
      comic_result = files_list.entries.select { |entry| entry.name.include?(product.name) }
      next if comic_result.blank?
      comic = comic_result.first
      temporary_link = client.get_temporary_link(comic.id)
      pdf_url = URI.open(temporary_link.link)
      product.file_attachment.attach(io: pdf_url, filename: comic.name, content_type: "application/pdf")
      product.save!
    end
  end
end
