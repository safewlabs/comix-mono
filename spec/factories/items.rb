# frozen_string_literal: true

# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  description :text
#  slug        :string           not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  bundle_id   :bigint           not null
#
# Indexes
#
#  index_items_on_bundle_id  (bundle_id)
#
# Foreign Keys
#
#  fk_rails_...  (bundle_id => bundles.id)
#
FactoryBot.define do
  factory :item do
    association :bundle
    title { Faker::Lorem.sentence(word_count: 3) }
    description { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
  end
end
