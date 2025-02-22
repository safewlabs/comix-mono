# frozen_string_literal: true

class Api::V1::ProfilesController < ApplicationController
  def home_profiles
    @creator_profiles = CreatorProfile.order("RANDOM()").take(12)
  end

  def index
    @pagy, @creator_profiles = pagy(CreatorProfile.includes([:avatar_attachment]).all)
    @pagination = pagy_metadata(@pagy)
  end

  def show
    @creator_profile = CreatorProfile.includes([:avatar_attachment]).find_by(slug: params[:slug])
    @collaborations = @creator_profile.collaborations
                                .includes(:product)
  end
end
