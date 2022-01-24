# frozen_string_literal: true

class LogoComponent < ViewComponent::Base
  def initialize(classes:)
    @classes = classes
  end
end
