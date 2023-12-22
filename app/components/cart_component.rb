# frozen_string_literal: true

class CartComponent < ViewComponent::Base
  def initialize(cart:)
    @cart = cart
  end

  def line_items
    @cart.line_items
  end

end
