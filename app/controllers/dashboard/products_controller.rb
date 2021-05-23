class Dashboard::ProductsController < ApplicationController
    def new
      @product = Product.new
    end
end
  