# frozen_string_literal: true

class Products::PurchasedComponent < ViewComponent::Base
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
    return nil if !@product.file_attachment.present? || @product.disable_download
    link_to "Download",
            rails_blob_url(file, disposition: "attachment"),
            target: "_blank",
            class: "inline-flex text-center -md border border-transparent bg-cx-purple px-8 py-2 text-xl font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 sm:w-auto"
  end

  def file
    @product.file_attachment
  end
end
