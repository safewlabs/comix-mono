# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  def new_releases
    onboarded_products = Product.published.where(store: Store.where(user: User.where.not(stripe_user_id: nil)))
    @new_releases = onboarded_products.order(created_at: :desc).take(12)
  end
end
