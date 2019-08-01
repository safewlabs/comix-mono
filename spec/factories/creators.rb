FactoryBot.define do
  factory :creator do
    name { Faker::Artist.name }
    bio { Faker::Lorem.paragraph(sentence_count: 2) }
    website {  }
    blog { Faker::Internet.url }
    twitter { Faker::Twitter.screen_name }
    instagram { Faker::Internet.username }
    facebook { Faker::Internet.username }

    trait :with_collaborations do
      transient do
        number_of_collaborations { 2 }
      end
      
      after(:create) do |creator|
        create_list(:collaborations, number_of_collaborations, creator: creator)
      end
    end
  end
end
