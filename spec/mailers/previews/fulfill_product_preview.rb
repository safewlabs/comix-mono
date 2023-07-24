# frozen_string_literal: true

# Preview all emails at http://localhost:3000/rails/mailers/fulfill_product
class FulfillProductPreview < ActionMailer::Preview
  def send_product
    user = FactoryBot.create(:user)
    product = FactoryBot.create(:product)
    FulfillProductMailer.with(user:).send_product(product)
  end
end
