# frozen_string_literal: true

class Marketing::PostBlurbComponent < ViewComponent::Base
  def initialize(post:)
    @post = post
  end
end
