# frozen_string_literal: true

class CreatorProfiles::CoverImageComponent < ViewComponent::Base
  def initialize(creator_profile:)
    @creator_profile = creator_profile
  end
end
