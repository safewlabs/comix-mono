FactoryBot.define do
  factory :creator do
    name { Faker::Artist.name }
    bio { Faker::Lorem.paragraph(2) }
    website {  }
    blog { Faker::Internet.url }
    twitter { Faker::Twitter.screen_name }
    instagram { Faker::Internet.username }
    facebook { Faker::Internet.username }
  end
end
