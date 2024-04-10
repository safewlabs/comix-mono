# frozen_string_literal: true

class Stores::CardComponent < ViewComponent::Base
  def initialize(store:)
    @store = store
  end
end
