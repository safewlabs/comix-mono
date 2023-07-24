# frozen_string_literal: true

class AnnouncementComponent < ViewComponent::Base
  def initialize(user: nil)
    @user = user
  end
end
