# frozen_string_literal: true

class CreatorProfiles::CardComponent < ViewComponent::Base
  def initialize(creator_profile:, show_cover: true)
    @creator_profile = creator_profile
    @show_cover = show_cover
  end

  def head_class
    return "-mt-4" if @show_cover
    ""
  end
end
