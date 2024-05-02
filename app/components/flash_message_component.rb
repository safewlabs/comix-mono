# frozen_string_literal: true

class FlashMessageComponent < ApplicationComponent
  def initialize(flash:)
    @flash = flash
  end
end
