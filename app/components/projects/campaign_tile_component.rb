# frozen_string_literal: true

class Projects::CampaignTileComponent < ViewComponent::Base
  def initialize(project:)
    @project = project
  end
end
