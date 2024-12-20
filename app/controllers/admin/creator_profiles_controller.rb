# frozen_string_literal: true

class Admin::CreatorProfilesController < AdminController
  before_action :set_profile, only: [:edit, :update, :show]
  before_action :creator_users

  def index
    @pagy, @profiles = pagy(CreatorProfile.all)
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
        @profile.managers << current_user
        format.html { redirect_to profile_path(@profile), notice: "CreatorProfile was successfully created." }
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
        format.html { redirect_to profile_path(@profile), notice: "CreatorProfile was successfully updated." }
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

    def creator_users
      @creator_users = User.with_role(:creator)
    end

    def profile_params
      params.require(:creator_profile).permit(:name, :avatar, :profile_cover, :bio, :twitter, :instagram, :facebook, :tiktok, :website, :skills, :user_id)
    end
end
