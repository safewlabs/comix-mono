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
        mode: 'payment',
        line_items: [{
            # For metered billing, do not pass quantity
            quantity: 1,
            price: 'price_1Mo62cFwwA337V7VCVefmRbM',
        }],
        customer_email: "saurabh.a.bhatia@gmail.com"
    )
    redirect_to(session.url, allow_other_host: true, status: :see_other)
  end

  def success
    session = Stripe::Checkout::Session.retrieve(params[:session_id])
    customer = Stripe::Customer.retrieve(session.customer)
  end

  def cancel
  end
end
