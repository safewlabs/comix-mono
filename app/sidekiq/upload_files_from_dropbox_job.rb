# frozen_string_literal: true

class UploadFilesFromDropboxJob
  include Sidekiq::Job

  def perform(token)
    store = Store.find 64
    client = DropboxApi::Client.new(token)
    files_list = client.list_folder("/COMIX files")
    store.products.each do |product|
      comic_result = files_list.entries.select { |entry| entry.name.include?(product.name) }
      temporary_link = client.get_temporary_link(comic_result.first.id)
      pdf_url = URI.open(temporary_link.link)
      product.file_attachment.attach(io: pdf_url, filename: temporary_link.metadata.name, content_type: 'application/pdf')
      product.save!
    end
  end
end
