class Dashboard::ProductsController < Dashboard::BaseController
  def new
    @product = Product.new
  end
end
  