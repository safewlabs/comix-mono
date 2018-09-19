FactoryBot.define do
  factory :product do
    name { Faker::Superhero.name }
    description { Faker::Lorem.paragraph(2) }
    price { 2.99 }
    page_count { 60 }
    release_date { "2018-09-16 17:58:16" }
    age_rating { "13+" }
    association :store, factory: :store
    
    trait :with_collaborators do
      transient do
        number_of_collaborations { 2 }
      end
      
      after(:create) do |product|
        create_list(:collaborations, number_of_collaborations, product: product)
      end
    end
  end
end
