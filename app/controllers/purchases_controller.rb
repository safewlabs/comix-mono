# frozen_string_literal: true

class PurchasesController < ApplicationController
  before_action :authenticate_user!
  def index
    @pagy, @purchases = pagy(current_user.purchases.order(created_at: :desc))
  end

  def free_purchase
    product = Product.find(params[:product_id])
    purchase = Purchase.find_or_initialize_by(user: current_user, product:)
    return redirect_to purchases_path unless purchase.new_record?
    respond_to do |format|
      if purchase.save
        format.html { redirect_to purchases_path, notice: "Your comic is ready to read" }
      else
        format.html { render product_path(product) }
      end
    end
  end

  def staff_purchase
    product = Product.find(params[:product_id])
    purchase = Purchase.find_or_initialize_by(user: current_user, product:)
    return redirect_to purchases_path unless purchase.new_record?
    respond_to do |format|
      if purchase.save
        format.html { redirect_to purchases_path, notice: "Your comic is ready to read" }
      else
        format.html { render product_path(product) }
      end
    end
  end

  def show
    @product = Product.find_by(slug: params[:slug])
  end
end
