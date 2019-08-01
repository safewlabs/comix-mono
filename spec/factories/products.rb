FactoryBot.define do
  factory :product do
    name { Faker::Superhero.name }
    description { Faker::Lorem.paragraph(sentence_count: 2) }
    price { 2.99 }
    page_count { 60 }
    release_date { "2018-09-16 17:58:16" }
    age_rating { "13+" }
    association :store, factory: :store
    association :publication, factory: :publication
    
    trait :with_collaborators do
      transient do
        number_of_collaborations { 2 }
      end
      
      after(:create) do |product|
        create_list(:collaborations, number_of_collaborations, product: product)
      end
    end
    
    trait :with_genres do
      transient do
        number_of_genres { 2 }
      end
      
      after(:create) do |product|
        create_list(:products_genre, number_of_genres, product: product)
      end
    end

    trait :with_categories do
      transient do
        number_of_categories { 2 }
      end
      
      after(:create) do |product|
        create_list(:products_categories, number_of_categories, product: product)
      end
    end
  end
end
