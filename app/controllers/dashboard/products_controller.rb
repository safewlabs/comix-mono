class Dashboard::ProductsController < Dashboard::BaseController
  before_action :set_product, only: [:edit, :delete, :update]
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
    @product.update!(product_params)
    redirect_to dashboard_products_path
  end

  def delete
  end

  private

  def set_product
    @product = Product.find_by(slug: params[:slug])
  end

  def product_params
    params.require(:product).permit(:name, :description, :issue_cover, :file, :price, :age_rating, :page_count)
  end
end
  