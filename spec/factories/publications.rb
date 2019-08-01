FactoryBot.define do
  factory :publication do
    name { Faker::Company.name }
    bio { Faker::Lorem.paragraph(sentence_count: 2) }
    type { ['Micro', 'Small'].sample }
    association :store, factory: :store
    
    trait :with_products do
      transient do
        number_of_products { 2 }
      end
      
      after(:create) do |publication|
        create_list(:products, number_of_products, publication: publication)
      end
    end
  end
end
