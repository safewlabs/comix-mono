# frozen_string_literal: true

class UpdateProductToStripeJob
  include Sidekiq::Job

  def perform(id, price_changed)
    update_product(id:, price_changed:)
  end

  def update_product(id:, price_changed:)
    product = find_product(id)
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)
    update_product_in_stripe(product)
    if price_changed
      stripe_product_price = update_price_in_stripe(product)
      product.update(stripe_price_id: stripe_product_price[:id])
    end
  end

  def find_product(id)
    Product.find(id)
  end

  def update_product_in_stripe(product)
    Stripe::Product.update(product.stripe_product_id, {
      name: product.name,
      description: product.description,
      images: [
        issue_cover(product)
      ]
    })
  end

  def update_price_in_stripe(product)
    Stripe::Price.update(product.stripe_price_id, active: false)

    Stripe::Price.create({
      product: product.stripe_product_id,
      unit_amount: (product.price * 100).to_i,
      currency: "usd"
    })
  end

  def issue_cover(product)
    path = Rails.application.routes.url_helpers.rails_blob_path(product.issue_cover, only_path: true)
    ENV["HOSTNAME"] + path
  end
end
