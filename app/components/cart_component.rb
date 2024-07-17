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

  def login_and_checkout
    if current_user
      checkout_button
    else
      login_button
    end
  end

  def login_button
    link_to "Login to Checkout",
            new_user_session_path,
            data: { turbo: false },
            class: "inline-flex items-center justify-center -md border border-transparent bg-cx-purple px-8 py-2 text-xl font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 sm:w-auto"
  end

  def checkout_button
    link_to "Checkout",
            payments_stripe_checkout_path,
            data: { turbo: false },
            class: "inline-flex items-center justify-center -md border border-transparent bg-cx-purple px-8 py-2 text-xl font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 sm:w-auto"
  end
end
