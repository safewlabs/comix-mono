# frozen_string_literal: true

# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  blurb        :text
#  description  :text
#  funding_goal :decimal(, )
#  funds_raised :decimal(, )
#  slug         :string           not null
#  status       :integer          default("draft")
#  title        :string
#  video_url    :string
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
  belongs_to :owner, class_name: "User", foreign_key: "user_id"
  has_rich_text :description
  has_many :projects_creator_profiles, dependent: :destroy
  has_many :creator_profiles, through: :projects_creator_profiles
  has_one_attached :issue_cover
  has_many :bundles, dependent: :destroy
  has_many :backings
  has_many :users, through: :backings

  enum status: {
    draft: 0,
    active: 1,
    ended: 2,
    archived: 3
  }
end
