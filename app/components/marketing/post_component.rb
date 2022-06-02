# frozen_string_literal: true

class Marketing::PostComponent < ViewComponent::Base
  def initialize(post:)
    @post = post
  end
end
