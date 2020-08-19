class HomeController < ApplicationController
  def index
    @genres = Genre.all
    @products = Product.order(:created_at).take(8)
    @categories = Category.order("RANDOM()").limit(4)
  end
end
