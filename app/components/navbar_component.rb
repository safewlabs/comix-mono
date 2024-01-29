# frozen_string_literal: true

class NavbarComponent < ViewComponent::Base
  def initialize(user: ni, cart: nil)
    @user = user
    @cart = cart
  end
end
