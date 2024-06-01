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
    elsif current_line_item && quantity <= 0
      current_line_item.destroy
    else
      @current_cart.line_items.create(product: @product, quantity:)
    end
    respond_to do |format|
      flash.now[:success] = "#{@product.name} added to cart!"
      format.turbo_stream do
        render turbo_stream: [
          turbo_stream.update("line_items_count", html: line_items_count),
          turbo_stream.update("flash-message", FlashMessageComponent.new(flash:).render_in(view_context))
        ]
      end
    end
  end

  def remove
    @line_item = LineItem.find_by(id: params[:id])
    @line_item.destroy

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: [
          turbo_stream.update("line_items_count", html: line_items_count),
          turbo_stream.update("cart", CartComponent.new(cart: @current_cart).render_in(view_context))
        ]
      end
    end
  end

  def line_items_count
    @current_cart.line_items.count
  end
end
