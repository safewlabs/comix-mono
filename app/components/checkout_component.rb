# frozen_string_literal: true

class CheckoutComponent < ApplicationComponent
  def initialize(cart:)
    @cart = cart
  end
end
