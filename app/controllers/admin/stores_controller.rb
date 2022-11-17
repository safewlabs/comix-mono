# frozen_string_literal: true

class Admin::StoresController < ApplicationController
  before_action :set_store, only: [:edit, :update, :show]

  def index
    @pagy, @stores = pagy(Store.all)
  end

  def show
  end

  def new
    @store = Store.new
    @creator_users = User.with_role(:creator)
  end

  def edit
  end

  def create
    @store = Store.new(store_params)
    respond_to do |format|
      if @store.save
        format.html { redirect_to @store, notice: "Store was successfully created." }
        format.json { render :show, status: :created, location: @store }
      else
        format.html { render :new }
        format.json { render json: @store.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @store.update(store_params)
    respond_to do |format|
      if @store.save
        format.html { redirect_to @store, notice: "Store was successfully updated." }
        format.json { render :show, status: :created, location: @store }
      else
        format.html { render :new }
        format.json { render json: @store.errors, status: :unprocessable_entity }
      end
    end
  end

  def delete
  end

  private
    def set_store
      @store = Store.find_by(slug: params[:slug])
    end

    def store_params
      params.require(:store).permit(:name, :user_id, :cover_image, :display_image, :description)
    end
end
