# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  age_rating   :string
#  name         :string
#  page_count   :integer
#  price        :float
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
    name { "MyString" }
    price { 1.5 }
    page_count { 1 }
    release_date { "2022-10-26 22:00:21" }
    age_rating { "MyString" }
    store { nil }
    slug { "MyString" }
  end
end
