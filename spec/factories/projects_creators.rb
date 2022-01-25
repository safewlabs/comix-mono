# frozen_string_literal: true

FactoryBot.define do
  factory :projects_creator do
    association :project
    association :creator
  end
end
