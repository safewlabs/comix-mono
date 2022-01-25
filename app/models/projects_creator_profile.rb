# frozen_string_literal: true

# == Schema Information
#
# Table name: projects_creator_profiles
#
#  id                 :bigint           not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  creator_profile_id :bigint           not null
#  project_id         :bigint           not null
#
# Indexes
#
#  index_projects_creator_profiles_on_creator_profile_id  (creator_profile_id)
#  index_projects_creator_profiles_on_project_id          (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (creator_profile_id => creator_profiles.id)
#  fk_rails_...  (project_id => projects.id)
#
class ProjectsCreatorProfile < ApplicationRecord
  belongs_to :project
  belongs_to :creator_profile
end
