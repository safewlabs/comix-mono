# frozen_string_literal: true

class FulfillProductMailer < ApplicationMailer
  def send_product(product)
    @user = params[:user]
    @product = product
    mail(to: @user.email, subject: "Your Comic #{@product.name} is ready")
  end
end
