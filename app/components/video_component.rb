# frozen_string_literal: true

class VideoComponent < ViewComponent::Base
  def initialize(video_url:)
    @video_url = video_url
  end
end
