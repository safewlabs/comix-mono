# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  before_action :onboarded_products

  def index
    @pagy, @products = pagy(Product.includes([:issue_cover_attachment, :store]).all)
    @pagination = pagy_metadata(@pagy)
  end

  def show
    @product = Product.includes([:issue_cover_attachment, :collaborations, :genres, :store])
                            .find_by(slug: params[:slug])
    @other_products = Product.includes([:issue_cover_attachment, :store])
                            .published
                            .where
                            .not(id: @product.id).limit(4)
                            .order("RANDOM()")
  end

  def new_releases
    @new_releases = onboarded_products.order(created_at: :desc).take(12)
  end

  def top_ten
    @top_ten = onboarded_products.order("RANDOM()").take(10)
  end

  def onboarded_products
    Product.includes([:issue_cover_attachment, :store]).published.where(store: Store.where(user: User.where.not(stripe_user_id: nil)))
  end
end
