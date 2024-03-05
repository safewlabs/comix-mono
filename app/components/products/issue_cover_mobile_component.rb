# frozen_string_literal: true

class Products::IssueCoverMobileComponent < ViewComponent::Base
  def initialize(product:, user:)
    @product = product
    @user = user
  end

  def is_onboarded?
    @product.store.user.stripe_user_id &&
    @product.stripe_product_id &&
    @product.stripe_price_id
  end

  def is_free?
    @product.price.eql?(0)
  end
end
