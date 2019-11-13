class HomeController < ApplicationController
  def index
    @genres = Genre.all
    @categories = Category.order("RANDOM()").limit(4)
  end
end
