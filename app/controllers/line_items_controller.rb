class LineItemsController < ApplicationController
    before_action :authenticate_user!

    def create
      chosen_product = Product.find(params[:product_id])
      current_cart = @current_cart
      if current_cart.products.include?(chosen_product)
        # Find the line_item with the chosen_product
        @line_item = current_cart.line_items.find_by(product_id: chosen_product)
        # Iterate the line_item's quantity by one
        @line_item.quantity += 1
      else
        @line_item = LineItem.new(cart: current_cart, product: chosen_product, quantity: 1)
      end

      # Save and redirect to cart show path
      @line_item.save!
      redirect_to cart_path(current_cart)
    end

    def add_quantity
      @line_item = LineItem.find(params[:id])
      @line_item.quantity += 1
      @line_item.save
      redirect_to cart_path(@current_cart)
    end

    def reduce_quantity
      @line_item = LineItem.find(params[:id])
      if @line_item.quantity > 1
        @line_item.quantity -= 1
      end
      @line_item.save
      redirect_to cart_path(@current_cart)
    end

    def destroy
      @line_item = LineItem.find(params[:id])
      @line_item.destroy
      redirect_to cart_path(@current_cart)
    end

    private
    def line_item_params
      params.require(:line_item).permit(:quantity,:product_id, :cart_id)
    end
end
