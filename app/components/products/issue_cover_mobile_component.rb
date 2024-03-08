# frozen_string_literal: true

class Products::IssueCoverMobileComponent < ViewComponent::Base
  def initialize(product:)
    @product = product
  end

  def is_onboarded?
    @product.store.user.stripe_user_id &&
    @product.stripe_product_id &&
    @product.stripe_price_id
  end
end
