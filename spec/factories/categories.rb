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
