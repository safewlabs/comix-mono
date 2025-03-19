# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :use_jsx_rendering_defaults, only: [:index]
  layout "newui", only: [:index]

  def index
    @genres = Genre.published.includes([:cover_attachment])
    onboarded_products = Product.includes([:issue_cover_attachment, :store])
                                .published.where(store: onboarded_stores)
    @onboarded_products = onboarded_products.order("RANDOM()").take(12)
    @new_releases = onboarded_products.order(created_at: :desc).take(12)
    @top_ten = onboarded_products.order("RANDOM()").take(10)
    @creator_profiles = CreatorProfile.includes([:avatar_attachment]).order("RANDOM()").take(8)
    @stores = Store.includes([:display_image_attachment]).order("RANDOM()").take(8)
    @posts = Post.published.last(6)
    set_meta_tags title: "Home",
      description: "Comix home",
      keywords: "Comics, Indie comics"
  end

  def onboarded_stores
    Store.includes([:display_image_attachment]).where(user: onboarded_users)
  end

  def onboarded_users
    User.where.not(stripe_user_id: nil)
  end
end
