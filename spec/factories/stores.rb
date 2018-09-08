FactoryBot.define do
  factory :store do
    name { Faker::Artist.name }
    description { Faker::Lorem.paragraph(2) }
    association :owner, factory: :user
    
    trait :with_users do
      transient do
        number_of_users { 2 }
      end
      
      after(:create) do |store|
        create_list(:teams, number_of_users, store: store)
      end
    end
  end
end
