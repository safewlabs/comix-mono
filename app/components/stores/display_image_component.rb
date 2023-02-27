# frozen_string_literal: true

class Stores::DisplayImageComponent < ViewComponent::Base
  def initialize(store:)
    @store = store
  end
end
