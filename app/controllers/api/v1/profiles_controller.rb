# frozen_string_literal: true

class Api::V1::ProfilesController < ApplicationController
  def home_profiles
    @creator_profiles = CreatorProfile.order("RANDOM()").take(12)
  end
end
