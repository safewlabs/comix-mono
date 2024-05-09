# frozen_string_literal: true

class MerchantPayoutJob
  include Sidekiq::Job

  def perform(line_item_ids, transfer_group, cart_id)
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)
    cart = Cart.find_by(id: cart_id)
    line_items = LineItem.where(id: line_item_ids)
    products = line_items.map(&:product)
    products.each do |product|
      product_price_in_cents = product.price * 100
      stripe_account_id = product.store.user.stripe_user_id
      Stripe::Transfer.create({
        amount: compute_application_fee_amount(product_price_in_cents),
        currency: "usd",
        destination: stripe_account_id,
        transfer_group:,
      })
    end
    cart.line_items.delete_all
  end

  def compute_application_fee_amount(base_price)
    # Take a 10% cut.
    (0.15 * base_price).to_i
  end
end
