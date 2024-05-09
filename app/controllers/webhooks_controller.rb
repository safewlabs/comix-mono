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
    case event["type"]
    when "payment_intent.succeeded"
      order_reference = event["data"]["object"]["transfer_group"]
      order = Order.find_by(order_reference:)
      order.success!
      MerchantPayoutJob.perform_async(order.line_item_ids, order_reference, order.cart.id)
    when "checkout.session.completed"
      # Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
      session = Stripe::Checkout::Session.retrieve({
        id: event["data"]["object"]["id"],
        expand: ["line_items"],
      })
      stripe_product_ids = session.line_items.map { |item| item.price.product }
      customer_email = event["data"]["object"]["customer_email"]
      FulfillOrderJob.perform_async(customer_email, stripe_product_ids)
      render json: { message: "success" }
    end
  end
end
