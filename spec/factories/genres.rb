# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :genre do
    name { Faker::Book.genre }
    
    trait :with_products do
      transient do
        number_of_products { 2 }
      end
      
      after(:create) do |genre|
        create_list(:products_genre, number_of_products, genre: genre)
      end
    end
  end
end
