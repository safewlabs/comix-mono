FactoryBot.define do
  factory :product do
    name { Faker::Superhero.name }
    description { Faker::Lorem.paragraph(2) }
    price { 2.99 }
    page_count { 60 }
    release_date { "2018-09-16 17:58:16" }
    age_rating { "13+" }
    association :store, factory: :store
  end
end
