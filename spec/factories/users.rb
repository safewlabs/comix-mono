FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'password' }
    password_confirmation { 'password' }
    
    trait :with_stores do
      transient do
        number_of_stores { 2 }
      end
      
      after(:create) do |user|
        create_list(:teams, number_of_stores, user: user)
      end
    end
  end
end
