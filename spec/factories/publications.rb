# == Schema Information
#
# Table name: publications
#
#  id               :bigint           not null, primary key
#  name             :string
#  bio              :text
#  publication_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  store_id         :bigint
#  slug             :string
#
FactoryBot.define do
  factory :publication do
    name { Faker::Company.name }
    bio { Faker::Lorem.paragraph(sentence_count: 2) }
    publication_type { ['Micro', 'Small'].sample }
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
