class StoresController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  after_action :verify_authorized, except: [:show, :create]
  before_action :set_store, only: [:show, :edit, :update, :destroy]
    
  def index
    @stores = Store.where(user: current_user)
    authorize Store
  end

  def show
    @store = Store.find_by(slug: params[:slug])
  end

  def new
    authorize Store
    @store = Store.new
  end

  def edit
  end

  def create
    @store = Store.new(store_params)
    @store.user = current_user
    if @store.save!
      redirect_to @store
    else
      render :new
    end
  end

  def update
  end

  def destroy
  end

  private

  def store_params
    params.require(:store).permit(:name, :description, :display_image, :cover_image, :owner_id)
  end

  def set_store
    @store = Store.find_by(slug: params[:slug])
  end
end