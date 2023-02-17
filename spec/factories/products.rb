# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  age_rating   :string
#  description  :text
#  name         :string
#  page_count   :integer
#  price        :decimal(5, 2)
#  release_date :datetime
#  slug         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  store_id     :bigint           not null
#
# Indexes
#
#  index_products_on_store_id  (store_id)
#
# Foreign Keys
#
#  fk_rails_...  (store_id => stores.id)
#
FactoryBot.define do
  factory :product do
    association :store
    name { Faker::Book.title }
    price { 5 }
    page_count { 30 }
    release_date { 1.year.ago }
    age_rating { "18+" }
  end
end
