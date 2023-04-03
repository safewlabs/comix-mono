# frozen_string_literal: true

class Dashboard::ProductsController < Dashboard::BaseController
  before_action :set_store
  before_action :set_product, only: [:edit, :update, :show, :destroy]
  before_action :stores_grenre_creators, only: [:new, :edit]

  def index
    if @store
      @pagy, @products = pagy(@store.products)
    else
      @products = []
    end
  end

  def show
  end

  def new
    @product = Product.new
  end

  def edit
  end

  def create
    @product = Product.new(product_params)
    respond_to do |format|
      if @product.save
        format.html { redirect_to [:dashboard, @product], notice: "Product was successfully created." }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @product.update(product_params)
    respond_to do |format|
      if @product.save
        format.html { redirect_to [:dashboard, @product], notice: "Product was successfully updated." }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy
    flash[:success] = "The Product was successfully destroyed."
    redirect_to dashboard_products_path
  end

  private
    def set_product
      @product = Product.find_by(slug: params[:slug])
    end

    def set_store
      @store = current_user.store
    end

    def product_params
      params.require(:product).permit(:name, :user_id, :issue_cover, :file_attachment, :description, :age_rating, :page_count, :price, :release_date, :store_id, creator_profile_ids: [], genre_ids: [])
    end

    def stores_grenre_creators
      @genres = Genre.all
      @creator_profiles = CreatorProfile.all
    end
end
