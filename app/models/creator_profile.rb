# frozen_string_literal: true

# == Schema Information
#
# Table name: creator_profiles
#
#  id         :bigint           not null, primary key
#  bio        :text
#  email      :string
#  facebook   :string
#  instagram  :string
#  name       :string
#  skills     :string
#  slug       :string           not null
#  tiktok     :string
#  twitter    :string
#  website    :string
#  youtube    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_creator_profiles_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class CreatorProfile < ApplicationRecord
  include Sluggable

  belongs_to :user, optional: true
  has_one_attached :avatar
  has_one_attached :profile_cover
  has_many :projects_creator_profiles, dependent: :destroy
  has_many :projects, through: :projects_creator_profiles
  has_many :creator_profiles_managers, dependent: :destroy
  has_many :managers,
           class_name: "User",
           foreign_key: :user_id,
           through: :creator_profiles_managers

  has_many :collaborations
  has_many :products, through: :collaborations
end
