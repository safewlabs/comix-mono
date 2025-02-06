# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @genres = Genre.published
    onboarded_products = Product.published.where(store: Store.where(user: User.where.not(stripe_user_id: nil)))
    @onboarded_products = onboarded_products.order("RANDOM()").take(12)
    @recent_products = onboarded_products.order(created_at: :desc).take(12)
    @creator_profiles = CreatorProfile.order("RANDOM()").take(8)
    @stores = Store.order("RANDOM()").take(8)
    @markosia_store = Store.find(64)
    @markosia_products = @markosia_store.products.order("RANDOM()").take(8)

    @posts = Post.published.last(6)
    set_meta_tags title: "Home",
      description: "Comix home",
      keywords: "Comics, Indie comics"
  end
end
