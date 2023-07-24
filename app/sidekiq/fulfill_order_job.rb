# frozen_string_literal: true

class FulfillOrderJob
  include Sidekiq::Job

  def perform(customer_email, stripe_price_id)
    user = User.find_by(email: customer_email)
    product = Product.find_by(stripe_price_id:)

    Purchase.create!(user:, product:)
    FulfillProductMailer.with(user:).send_product(product).deliver_later
  end
end
