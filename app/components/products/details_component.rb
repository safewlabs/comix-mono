# frozen_string_literal: true

class Products::DetailsComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end

end
