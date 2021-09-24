# == Schema Information
#
# Table name: stores
#
#  id         :bigint           not null, primary key
#  name       :string
#  user_id    :bigint
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :bigint
#
FactoryBot.define do
  factory :store do
    name { Faker::Artist.name }
    description { Faker::Lorem.paragraph(sentence_count: 2) }
    association :user, factory: :user
    display_image { Rack::Test::UploadedFile.new('spec/support/images/gummy-camping.png', 'image/png') }
    cover_image { Rack::Test::UploadedFile.new('spec/support/images/lance-anderson-AJgdNGVNtLg-unsplash.jpg', 'image/jpg') }
    
    trait :with_users do
      transient do
        number_of_users { 2 }
      end
      
      after(:create) do |store|
        create_list(:teams, number_of_users, store: store)
      end
    end
    
    trait :with_products do
      transient do
        number_of_products { 2 }
      end
      
      after(:create) do |store|
        create_list(:products, number_of_products, store: store)
      end
    end
    
    trait :with_publications do
      transient do
        number_of_publications { 2 }
      end
      
      after(:create) do |store|
        create_list(:publications, number_of_publications, store: store)
      end
    end
  end
end
