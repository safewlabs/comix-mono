# == Schema Information
#
# Table name: creators
#
#  id         :bigint           not null, primary key
#  name       :string
#  bio        :text
#  website    :string
#  blog       :string
#  twitter    :string
#  instagram  :string
#  facebook   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slug       :string
#
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
