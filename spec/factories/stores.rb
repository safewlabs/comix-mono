FactoryBot.define do
  factory :store do
    name { Faker::Artist.name }
    description { Faker::Lorem.paragraph(2) }
  end
end
