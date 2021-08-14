class Dashboard::ProductsController < Dashboard::BaseController
  def index
    @products
  end

  def new
    @product = Product.new
  end
end
  