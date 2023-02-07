# frozen_string_literal: true

class NavbarComponent < ViewComponent::Base
  def initialize(user: nil)
    @user = user
  end
end
