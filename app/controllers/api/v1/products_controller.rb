# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  before_action :onboarded_products

  def index
    @pagy, @products = pagy(Product.all)
    @pagination = pagy_metadata(@pagy)
  end

  def new_releases
    @new_releases = onboarded_products.order(created_at: :desc).take(12)
  end

  def top_ten
    @top_ten = onboarded_products.order("RANDOM()").take(10)
  end

  def onboarded_products
    Product.published.where(store: Store.where(user: User.where.not(stripe_user_id: nil)))
  end
end
