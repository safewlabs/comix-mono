# frozen_string_literal: true

class Dashboard::ProductsController < Dashboard::BaseController
  def index
    @products = current_user.store.products
  end
end
