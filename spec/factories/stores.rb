# frozen_string_literal: true

# == Schema Information
#
# Table name: stores
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_stores_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :store do
    association :user
    name { Faker::Book.publisher }
    description { Faker::Lorem.paragraph(sentence_count: 4) }

    after(:build) do |store|
      store.cover_image.attach(
        io: File.open(Rails.root.join("spec", "support", "images", "comix-banner-final.jpg")),
        filename: "comix-banner-final.jpg",
        content_type: "image/jpeg"
      )
    end

    after(:build) do |store|
      store.display_image.attach(
        io: File.open(Rails.root.join("spec", "support", "images", "logo.jpg")),
        filename: "logo.jpg",
        content_type: "image/jpeg"
      )
    end
  end
end
