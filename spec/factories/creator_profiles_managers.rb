# frozen_string_literal: true

# == Schema Information
#
# Table name: creator_profiles_managers
#
#  id                 :bigint           not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  creator_profile_id :bigint           not null
#  user_id            :bigint           not null
#
# Indexes
#
#  index_creator_profiles_managers_on_creator_profile_id  (creator_profile_id)
#  index_creator_profiles_managers_on_user_id             (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (creator_profile_id => creator_profiles.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :creator_profiles_manager do
    association :managed_profiles, factory: :creator_profile
    association :managers, factory: :user
  end
end
