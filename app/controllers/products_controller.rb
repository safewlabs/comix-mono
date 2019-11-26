class ProductsController < ApplicationController
  def show
    @product = Product.find_by(slug: params[:slug])
  end
end
