# frozen_string_literal: true

class ProductsController < ApplicationController
  def show
    @product = Product.find_by(slug: params[:slug])
    @other_products = Product.where.not(id: @product.id).limit(4).order("RANDOM()")
    set_meta_tags(@product.name,
                  @product.description,
                  @product.issue_cover)
  end

  def genres
    @genre = Genre.find_by(slug: params[:genre_slug])
    @pagy, @products = pagy(@genre.products)
    set_meta_tags("Buy Comics | #{@genre.name}",
                  "Buy Comics by Indie Creators",
                  @products.first.issue_cover)
  end

  def free_comics
    @genre = Genre.all
    @age_ratings = Product.pluck(:age_rating).uniq
    products = Product.free
    @pagy, @products = pagy(products)
    set_meta_tags("Free Comics",
                  "Buy Comics by Indie Creators",
                  @products.first.issue_cover)
  end

  def index
    @genre = Genre.all
    @age_ratings = Product.pluck(:age_rating).uniq
    @pagy, @products = pagy(Product.where(store: Store.where(user: User.where.not(stripe_user_id: nil)))
                                   .order("updated_at DESC"))
    set_meta_tags("Buy Comics",
                  "Buy Comics by Indie Creators",
                  @products.first.issue_cover)
  end

  def set_meta_tags(title, description, image)
    set_meta_tags title:,
          description:,
          keywords: "Comics, Indie comics",
          twitter: {
            card: "photo",
            image: {
              _: image,
              width: 200,
              height: 200
            }
          },
          og: {
            title: :title,
            site_name: :site,
            image:
        }
  end
end
