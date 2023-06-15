# frozen_string_literal: true

class Dashboard::ProfileComponent < ViewComponent::Base
  def initialize(profile:)
    @profile = profile
  end
end
