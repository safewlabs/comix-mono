# frozen_string_literal: true

class Products::CollaborationsComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end
end
