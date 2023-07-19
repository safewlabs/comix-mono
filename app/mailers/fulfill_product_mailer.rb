# frozen_string_literal: true

class FulfillProductMailer < ApplicationMailer
  def send_product(product)
    @product = product
    mail(to: params[:user].email, subject: "Your Comic #{@product.name} is ready")
  end
end
