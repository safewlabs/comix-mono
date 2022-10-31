# frozen_string_literal: true

class Products::IssueCoverComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end

end
