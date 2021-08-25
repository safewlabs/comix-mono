class Dashboard::ProductsController < Dashboard::BaseController
  def index
    @products = Product.where(store: current_user.stores)
  end

  def new
    @product = Product.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end
end
  