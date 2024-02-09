# frozen_string_literal: true

class Payments::StripeController < ApplicationController
  before_action :authenticate_user!

  def checkout
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)

    # See https://stripe.com/docs/api/checkout/sessions/create
    # for additional parameters to pass.
    # {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    # the actual Session ID is returned in the query parameter when your customer
    # is redirected to the success page.
    hostname = ENV["HOSTNAME"]
    line_items = []
    @current_cart.line_items.map do |line_item|
      item = {
        quantity: 1,
        price: line_item.product.stripe_price_id
      }
      line_items << item
    end
    transfer_group_name = "ORDER-#{SecureRandom.hex(10)}"

    session = Stripe::Checkout::Session.create(
      success_url: "#{hostname}/payments/stripe/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "#{hostname}/payments/stripe/cancel",
      mode: "payment",
      line_items:,
      customer_email: current_user.email,
      payment_intent_data: {
        receipt_email: current_user.email,
        transfer_group: transfer_group_name
      }
    )
    redirect_to(session.url, allow_other_host: true, status: :see_other)
  end

  def success
    redirect_to purchases_path
  end

  def cancel
    redirect_to cart_path(@current_cart)
  end

  def compute_application_fee_amount(base_price)
    # Take a 10% cut.
    (0.1 * base_price).to_i
  end
end
