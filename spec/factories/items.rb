# frozen_string_literal: true

FactoryBot.define do
  factory :item do
    association :bundle
    title { Faker::Lorem.sentence(word_count: 3) }
    description { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
  end
end
