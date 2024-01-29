# frozen_string_literal: true

class Payments::StripeController < ApplicationController
  before_action :authenticate_user!
  before_action :set_product, only: [:checkout, :cancel]

  def checkout
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)

    # See https://stripe.com/docs/api/checkout/sessions/create
    # for additional parameters to pass.
    # {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    # the actual Session ID is returned in the query parameter when your customer
    # is redirected to the success page.
    hostname = ENV["HOSTNAME"]
    line_items = []
    @current_cart.line_items.each do |line_item|
      line_items << {
                      quantity: 1,
                      price: line_item.product.stripe_price_id
                    }
    end
    transfer_group_name = "ORDER-#{SecureRandom.hex(10)}"
    @current_cart.line_items.first.product.id
    session = Stripe::Checkout::Session.create(
      success_url: "#{hostname}/payments/stripe/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "#{hostname}/payments/stripe/cancel",
      mode: "payment",
      line_items: [{
          # For metered billing, do not pass quantity
          quantity: 1,
          price: @product.stripe_price_id,
      }],
      payment_intent_data: {
        transfer_group: transfer_group_name
      },
      customer_email: current_user.email
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

  def set_product
    @product = Product.find(params[:product_id])
  end
end
