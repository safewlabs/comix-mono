# frozen_string_literal: true

class ProfilesController < ApplicationController
  def show
    @creator_profile = CreatorProfile.find_by(slug: params[:slug])
  end
end
