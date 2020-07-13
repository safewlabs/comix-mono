class StoresController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  after_action :verify_authorized, except: [:show]
    
  def index
    @stores = Store.all
    authorize Store
  end

  def show
    @store = Store.find_by(slug: params[:slug])
  end

  def new
    authorize Store
    @store = Store.new(owner: current_user)
  end

  def edit
  end

  def create
    if @store.save!
      redirect_to @store
    else
      render "new"
    end
  end

  def update
  end

  def destroy
  end
end
