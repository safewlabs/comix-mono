class HomeController < ApplicationController
  def index
    @genres = Genre.all
  end
end
