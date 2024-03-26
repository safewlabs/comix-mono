# frozen_string_literal: true

class ApplicationComponent < ViewComponent::Base
  include Turbo::StreamsHelper
  include Turbo::FramesHelper
end
