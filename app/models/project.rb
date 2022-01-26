# frozen_string_literal: true

# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  description  :text
#  funding_goal :string
#  slug         :string           not null
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_projects_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Project < ApplicationRecord
  include Sluggable
  belongs_to :user
  has_many :projects_creator_profiles, dependent: :destroy
  has_many :creator_profiles, through: :projects_creator_profiles
end
