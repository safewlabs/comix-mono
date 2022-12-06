# frozen_string_literal: true

class PageTitleComponent < ViewComponent::Base
  def initialize(title:)
    @title = title
  end

  def full_title
    @title + " | Comix - Discover Indie comics, Crowdfund and Buy"
  end

end
