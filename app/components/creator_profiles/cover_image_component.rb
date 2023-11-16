# frozen_string_literal: true

class CreatorProfiles::CoverImageComponent < ViewComponent::Base
  def initialize(creator_profile:, class_names: nil)
    @creator_profile = creator_profile
    @class_names = class_names
  end

  def classes
    "w-full object-cover #{@class_names}"
  end
end
