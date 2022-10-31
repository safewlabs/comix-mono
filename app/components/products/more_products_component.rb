# frozen_string_literal: true

class Products::MoreProductsComponent < ViewComponent::Base
  def initialize(products:)
    @products = products
  end

end
