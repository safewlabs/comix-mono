# frozen_string_literal: true

class FulfillOrderJob
  include Sidekiq::Job

  def perform(customer_email, stripe_product_ids)
    user = User.find_by(email: customer_email)
    products = Product.where(stripe_product_id: stripe_product_ids)

    products.each do |product|
      Purchase.create!(user:, product:)
      FulfillProductMailer.with(user:).send_product(product).deliver_later
    end
  end
end
