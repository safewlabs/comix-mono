class Dashboard::ProductsController < ApplicationController
    def new
      @product = Product.find_by(slug: params[:slug])
      @other_products = Product.where.not(id: @product.id).limit(4).order("RANDOM()")
    end
end
  