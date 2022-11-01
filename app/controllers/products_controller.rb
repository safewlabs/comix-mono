# frozen_string_literal: true

class ProductsController < ApplicationController
  def show
    @product = Product.find_by(slug: params[:slug])
    @other_products = Product.where.not(id: @product.id).limit(4).order("RANDOM()")
  end
end
