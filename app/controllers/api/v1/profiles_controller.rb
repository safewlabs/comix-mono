# frozen_string_literal: true

class Api::V1::ProfilesController < ApplicationController
  def home_profiles
    @creator_profiles = CreatorProfile.order("RANDOM()").take(12)
  end

  def index
    @pagy, @creator_profiles = pagy(CreatorProfile.includes([:avatar_attachment]).all)
    @pagination = pagy_metadata(@pagy)
  end
end
