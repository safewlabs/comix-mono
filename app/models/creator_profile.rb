# frozen_string_literal: true

# == Schema Information
#
# Table name: creator_profiles
#
#  id         :bigint           not null, primary key
#  bio        :text
#  name       :string
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
  belongs_to :user, optional: true
  has_many :projects_creator_profiles, dependent: :destroy
  has_many :projects, through: :projects_creator_profiles
end
