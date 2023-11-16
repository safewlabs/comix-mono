# frozen_string_literal: true

class CreatorProfiles::CardComponent < ViewComponent::Base
  def initialize(creator_profile:)
    @creator_profile = creator_profile
  end
end
