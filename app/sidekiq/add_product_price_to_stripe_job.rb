# frozen_string_literal: true

class AddProductPriceToStripeJob
  include Sidekiq::Job

  def perform(id)
    create_product_price(id:)
  end

  def create_product_price(id:)
    product = find_product(id)
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)
    stripe_product_price = Stripe::Price.create({
      product: product.stripe_product_id,
      unit_amount: product.price * 100.to_i,
      currency: "usd"
    })

    puts "%%%%%%%%%%%%%%%#{stripe_product_price}**************"
  end

  def find_product(id)
    Product.find(id)
  end
end
