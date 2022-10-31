# frozen_string_literal: true

class Products::StoreDetailsComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end

end
