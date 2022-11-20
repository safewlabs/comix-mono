# frozen_string_literal: true

class Products::CardComponent < ViewComponent::Base
  def initialize(product:, number_of_products: nil)
    @product = product
    @number_of_products = number_of_products
  end

  def card_width
    return "lg:w-1/3" if @number_of_products.nil?
    "lg:w-1/4"
  end
end
