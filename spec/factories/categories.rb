# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :category do
    name { ['Graphic novels', 'Series', 'Story Arcs', 'Bundles'].sample }

    trait :with_products do
      transient do
        number_of_products { 2 }
      end
      
      after(:create) do |category|
        create_list(:products_genre, number_of_products, category: category)
      end
    end
  end
end
