# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @genres = Genre.published
    @onboarded_products = Product.where(store: Store.where(user: User.where.not(stripe_user_id: nil)))
                                 .order("RANDOM()")
                                 .take(8)
    @coming_soon_products = Product.where(store: Store.where(user: User.where(stripe_user_id: nil)))
                                   .order("RANDOM()")
                                   .take(8)
    @posts = Post.published.last(3)
    set_meta_tags title: "Home",
      description: "Comix home",
      keywords: "Comics, Indie comics"
  end
end
