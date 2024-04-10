# frozen_string_literal: true

class CartComponent < ApplicationComponent
  def initialize(cart:)
    @cart = cart
  end

  def line_items
    @cart.line_items
  end

  def formatted_total
    Money.new(@cart.total, "USD").format
  end
end
