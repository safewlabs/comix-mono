# frozen_string_literal: true

class Cart::ItemComponent < ViewComponent::Base
  def initialize(line_item:)
    @line_item = line_item
  end

  def product
    @line_item.product
  end

  def line_item_image
    if product.issue_cover.present?
      image_tag(product.issue_cover,
                alt: product.name,
                class: "w-1/3 object-cover")
    else
      image_tag("https://res.cloudinary.com/drg9hguhu/image/upload/v1667569457/comix/78_tage_auf_der_stra%C3%9Fe_des_hasses_000_cover.jpg",
                alt: "placeholder image",
                class: "h-16 w-16 object-cover")
    end
  end
end
