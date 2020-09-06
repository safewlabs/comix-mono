class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def show
    @category = Category.find_by slug: params[:slug]
    @products = @category.products
  end
end
