# frozen_string_literal: true

FactoryBot.define do
  factory :projects_creator_profiles do
    association :project
    association :creator_profile
  end
end
