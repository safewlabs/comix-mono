# frozen_string_literal: true

class Posts::AuthorComponent < ViewComponent::Base
  def initialize(author:)
    @author = author
  end
end
