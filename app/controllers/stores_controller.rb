class StoresController < ApplicationController
  before_action :authenticate_user!
  after_action :verify_authorized, except: [:show]
    
  def index
    @stores = Store.all
    authorize Store
  end

  def show
  end

  def new
    authorize Store
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end
