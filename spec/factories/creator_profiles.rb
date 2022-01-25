# frozen_string_literal: true

FactoryBot.define do
  factory :creator_profile do
    name { Faker::Lorem.sentence(word_count: 3) }
    bio { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
  end
end
