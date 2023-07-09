# frozen_string_literal: true

class Payments::StripeController < ApplicationController
  def checkout
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)

    # See https://stripe.com/docs/api/checkout/sessions/create
    # for additional parameters to pass.
    # {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    # the actual Session ID is returned in the query parameter when your customer
    # is redirected to the success page.
    session = Stripe::Checkout::Session.create(
        success_url: "http://localhost:3000/payments/stripe/success",
        cancel_url: "http://localhost:3000/payments/stripe/cancel",
        mode: "payment",
        line_items: [{
            # For metered billing, do not pass quantity
            quantity: 1,
            price: "price id",
        }],
        payment_intent_data: {
          on_behalf_of: "account id",
          application_fee_amount: compute_application_fee_amount(500, 1),
          # The account receiving the funds, as passed from the client.
          transfer_data: {
            destination: "account id"
          },
        },
        customer_email: "saurabh.a.bhatia@gmail.com"
      )
    redirect_to(session.url, allow_other_host: true, status: :see_other)
  end

  def success
    session = Stripe::Checkout::Session.retrieve(params[:session_id])
    Stripe::Customer.retrieve(session.customer)
  end

  def cancel
  end

  def compute_application_fee_amount(base_price, quantity)
    # Take a 10% cut.
    (0.1 * base_price * quantity).to_i
  end
end
