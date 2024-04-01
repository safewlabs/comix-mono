# frozen_string_literal: true

class NavbarComponent < ViewComponent::Base
  def initialize(user: nil, cart: nil)
    @user = user
    @cart = cart
  end

  def line_items
    @cart.line_items
  end
end
