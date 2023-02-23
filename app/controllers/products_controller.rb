# frozen_string_literal: true

class ProductsController < ApplicationController
  def show
    @product = Product.find_by(slug: params[:slug])
    @other_products = Product.where.not(id: @product.id).limit(4).order("RANDOM()")
    set_meta_tags title: @product.name,
          description: @product.description,
          keywords: "Comics, Indie comics",
          twitter: {
            card: "photo",
            image: {
              _: @product.issue_cover,
              width: 200,
              height: 200
            }
          },
          og: {
            title: :title,
            site_name: :site,
            image: @product.issue_cover
          }
  end

  def index
    @pagy, @products = pagy(Product.order(created_at: :desc))
  end
end
