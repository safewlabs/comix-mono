# frozen_string_literal: true

class Marketing::HeroComponent < ViewComponent::Base
  def initialize(user:)
    @user = user
  end
end
