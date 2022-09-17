class Admin::ProfilesController < ApplicationController
  before_action :set_profile, only: [:edit, :update, :show]

  def index
    @profiles = CreatorProfile.all
  end

  def show
  end

  def new
    @profile = CreatorProfile.new
  end

  def edit
  end

  def create
    @profile = CreatorProfile.new(profile_params)
    respond_to do |format|
      if @profile.save
        format.html { redirect_to @profile, notice: "CreatorProfile was successfully created." }
        format.json { render :show, status: :created, location: @profile }
      else
        format.html { render :new }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @profile.update(profile_params)
    respond_to do |format|
      if @profile.save
        format.html { redirect_to profile_url(@profile), notice: "CreatorProfile was successfully updated." }
        format.json { render :show, status: :created, location: @profile }
      else
        format.html { render :new }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
  end

  def delete
  end

  private
    def set_profile
      @profile = CreatorProfile.find_by(slug: params[:slug])
    end

    def profile_params
      params.require(:creator_profile).permit(:name, :bio)
    end
end
