# frozen_string_literal: true

# == Schema Information
#
# Table name: creator_profiles
#
#  id         :bigint           not null, primary key
#  bio        :text
#  name       :string
#  slug       :string           not null
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
FactoryBot.define do
  factory :creator_profile do
    name { Faker::Lorem.sentence(word_count: 3) }
    bio { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
  end
end
