class GenresController < ApplicationController
  def index
    @genres = Genre.all
  end

  def show
    @genre = Genre.find_by slug: params[:slug]
    @products = @genre.products
  end
end
