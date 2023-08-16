# frozen_string_literal: true

class Search::ResultsComponent < ViewComponent::Base
  def initialize(products:)
    @products = products
  end

  def product_image(product)
    if product.issue_cover.present?
      image_tag(product.issue_cover.variant(:thumb),
                alt: product.name,
                class: "h-auto rounded-lg object-cover transition duration-500 group-hover:scale-105 sm:h-[50px]")
    else
      image_tag("https://res.cloudinary.com/drg9hguhu/image/upload/v1667569457/comix/78_tage_auf_der_stra%C3%9Fe_des_hasses_000_cover.jpg",
                alt: "placeholder image",
                hight: "200",
                class: "h-auto w-full rounded-lg object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]")
    end
  end
end
