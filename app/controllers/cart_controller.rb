# frozen_string_literal: true

class CartController < ApplicationController
  def show
  end

  def add
    @product = Product.find_by(id: params[:id])
    quantity = params[:quantity].to_i
    current_line_item = @current_cart.line_items.find_by(product_id: @product.id)
    if current_line_item && quantity > 0
      current_line_item
    elsif quantity <= 0
      current_line_item.destroy
    else
      @current_cart.line_items.create(product: @product, quantity:)
    end
    redirect_to cart_path(@current_cart)
  end

  def remove
    @line_item = LineItem.find_by(id: params[:id])
    @line_item.destroy
  end
end
