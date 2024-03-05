# frozen_string_literal: true

class Products::IssueCoverComponent < ViewComponent::Base
  def initialize(product:, user:)
    @product = product
    @user = user
  end

  def is_onboarded?
    @product.store.user.stripe_user_id.present? &&
    @product.stripe_product_id.present? &&
    @product.stripe_price_id.present?
  end

  def is_free?
    @product.price.eql?(0)
  end
end
