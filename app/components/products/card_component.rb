# frozen_string_literal: true

class Products::CardComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end
end
