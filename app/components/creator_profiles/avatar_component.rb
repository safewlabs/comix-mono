# frozen_string_literal: true

class CreatorProfiles::AvatarComponent < ViewComponent::Base
  def initialize(creator_profile:)
    @creator_profile = creator_profile
  end
end
