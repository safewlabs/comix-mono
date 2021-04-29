class OrdersController < ApplicationController
  before_action :authenticate_user!
  before_action :order_params, only: [:create]
  
  def index
    @orders = Order.where(user: current_user)
  end

  def show
    @order = Order.find(params[:id])
  end

  def new
    @order = Order.new
  end

  def create
    @order = Order.new(order_params)
    @current_cart.line_items.each do |item|
      @order.line_items << item
      item.cart_id = nil
    end
    @order.save
    Cart.destroy(session[:cart_id])
    session[:cart_id] = nil
    redirect_to root_path
  end
  
  private

  def order_params
    params.require(:order).permit(:user)
  end
end
