# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @pagy, @records = pagy(Product.all.order(created_at: :desc))
  end
end
