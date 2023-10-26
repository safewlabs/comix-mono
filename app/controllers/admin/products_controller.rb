# frozen_string_literal: true

class Admin::ProductsController < AdminController
  before_action :set_product, only: [:edit, :update, :show, :add_product_to_stripe]
  before_action :stores_grenre_creators, only: [:new, :edit]

  def index
    @pagy, @products = pagy(Product.all)
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
        AddProductToStripeJob.perform_async(@product.id)
        format.html { redirect_to @product, notice: "Product was successfully created." }
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
        format.html { redirect_to @product, notice: "Product was successfully updated." }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def delete
  end

  private
    def set_product
      @product = Product.find_by(slug: params[:slug])
    end

    def product_params
      params.require(:product).permit(:name, :user_id, :issue_cover, :description, :age_rating, :page_count, :price, :release_date, :store_id, :video_url, creator_profile_ids: [], genre_ids: [])
    end

    def stores_grenre_creators
      @stores = Store.all
      @genres = Genre.all
      @creator_profiles = CreatorProfile.all
    end
end
