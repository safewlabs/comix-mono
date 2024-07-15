# frozen_string_literal: true

class Products::CardComponent < ViewComponent::Base
  def initialize(product:, number_of_products: nil)
    @product = product
    @number_of_products = number_of_products
  end

  def card_width
    return "w-1/3" if @number_of_products.nil?
    "w-1/4"
  end

  def product_image
    if @product.issue_cover.present?
      image_tag(@product.issue_cover,
                alt: @product.name,
                class: "h-[350px] w-full object-cover sm:h-[450px] rounded-lg")
    else
      image_tag("https://res.cloudinary.com/drg9hguhu/image/upload/v1667569457/comix/78_tage_auf_der_stra%C3%9Fe_des_hasses_000_cover.jpg",
                alt: "placeholder image",
                class: "h-[350px] w-full object-cover sm:h-[450px] rounded-lg")
    end
  end

  def store_image
    if @product.store.display_image.present?
      image_tag(@product.store.display_image.variant(resize_to_limit: [32, 32]), class: "block rounded-lg")
    else
      image_tag("https://img.icons8.com/dotty/32/000000/full-image.png", width: "32", height: "32")
    end
  end
end
