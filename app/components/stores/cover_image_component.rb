# frozen_string_literal: true

class Stores::CoverImageComponent < ViewComponent::Base
  def initialize(store:)
    @store = store
  end
end
