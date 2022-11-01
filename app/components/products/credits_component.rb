# frozen_string_literal: true

class Products::CreditsComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end
end
