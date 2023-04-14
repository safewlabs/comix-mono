# frozen_string_literal: true

class AddProductToStripeJob
  include Sidekiq::Job

  def perform(id)
    create_product(id:)
  end

  def create_product(id:)
    product = find_product(id)
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)
    stripe_product = upload_product_to_stripe(product)
    stripe_product_price = upload_price_to_stripe(product, stripe_product[:id])
    product.update(stripe_product_id: stripe_product[:id], stripe_price_id: stripe_product_price[:id])
  end

  def find_product(id)
    Product.find(id)
  end

  def upload_product_to_stripe(product)
    Stripe::Product.create({
      name: product.name,
      description: product.description,
      images: [
        issue_cover(product)
      ]
    })
  end

  def upload_price_to_stripe(product, stripe_product_id)
    Stripe::Price.create({
      product: stripe_product_id,
      unit_amount: (product.price * 100).to_i,
      currency: "usd"
    })
  end

  def issue_cover(product)
    path = Rails.application.routes.url_helpers.rails_blob_path(product.issue_cover, only_path: true)
    ENV["HOSTNAME"] + path
  end
end
