FactoryBot.define do
  factory :store do
    name Faker::DcComics.hero
    description Faker::Lorem.paragraph(2)
  end
end
