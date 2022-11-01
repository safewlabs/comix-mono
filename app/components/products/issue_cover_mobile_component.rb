# frozen_string_literal: true

class Products::IssueCoverMobileComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end
end
