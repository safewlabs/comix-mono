# frozen_string_literal: true

class Products::PdfComponent < ViewComponent::Base
  def initialize(product:, type: nil)
    @product = product
  end

  def product_file_url
    return nil unless @product.file_attachment.present?
    rails_blob_url(file, disposition: "preview")
  end

  def file
    if type.eql?("preview")
      @product.preview_pdf
    else
      @product.file_attachment
    end
  end

  def viewer_api_key
    Rails.application.credentials.dig(:appryse_license_key)
  end
end
