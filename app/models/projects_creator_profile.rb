# frozen_string_literal: true

class ProjectsCreatorProfile < ApplicationRecord
  belongs_to :project
  belongs_to :creator_profile
end
