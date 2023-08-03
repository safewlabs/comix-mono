# frozen_string_literal: true

class WebhooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    event = nil
    endpoint_secret = ENV["ENDPOINT_SECRET"]

    begin
        sig_header = request.env["HTTP_STRIPE_SIGNATURE"]
        payload = request.body.read
        event = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
      rescue JSON::ParserError
        # Invalid payload
        return status 400
      rescue Stripe::SignatureVerificationError
        # Invalid signature
        return status 400
      end

    if event["type"] == "checkout.session.completed"
      # Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
      session = Stripe::Checkout::Session.retrieve({
        id: event["data"]["object"]["id"],
        expand: ["line_items"],
      })

      line_items = session.line_items
      customer_email = event["data"]["object"]["customer_email"]
      line_items.each do |line_item|
        FulfillOrderJob.perform_async(customer_email, line_item.price.id)
      end

      render json: { message: "success" }
    end
  end
end
