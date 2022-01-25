# frozen_string_literal: true

FactoryBot.define do
  factory :project do
    association :user
    title { Faker::Lorem.sentence(word_count: 3) }
    description { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
    funding_goal { 300.00 }
  end
end
