# frozen_string_literal: true

class ProjectsCreator < ApplicationRecord
  belongs_to :project
  belongs_to :creator
end
