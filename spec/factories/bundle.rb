# frozen_string_literal: true

FactoryBot.define do
  factory :bundle do
    association :project
    title { Faker::Lorem.sentence(word_count: 3) }
    description { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
    pledge_amount { 20.00 }
  end
end
