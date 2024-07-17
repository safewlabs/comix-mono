# frozen_string_literal: true

class Dashboard::ProductComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end

  def product_image
    if @product.issue_cover.present?
      image_tag(@product.issue_cover,
                alt: @product.name,
                class: "h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]")
    else
      image_tag("https://res.cloudinary.com/drg9hguhu/image/upload/v1667569457/comix/78_tage_auf_der_stra%C3%9Fe_des_hasses_000_cover.jpg",
                alt: "placeholder image",
                class: "h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]")
    end
  end

  def product_file
    return nil unless @product.file_attachment.present?
    link_to "View Pdf",
            rails_blob_url(file, disposition: "preview"),
            target: "_blank",
            class: "text-gray-700 transition underline hover:text-cx-purple"
  end

  def file
    @product.file_attachment
  end
end
