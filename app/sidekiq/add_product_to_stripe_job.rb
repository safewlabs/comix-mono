class AddProductToStripeJob
  include Sidekiq::Job

  def perform(id)
    create_product(id: id)
  end

  def create_product(id:)
    product = find_product(id)
    Stripe.api_key = Rails.application.credentials.dig(:stripe, :private_key)
    stripe_product = Stripe::Product.create({name: product.name, description: product.description})
    product.update(stripe_product_id: stripe_product[:id])
  end

  def find_product(id)
    Product.find(id)
  end
end
