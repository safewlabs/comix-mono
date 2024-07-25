# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id                :bigint           not null, primary key
#  age_rating        :string
#  description       :text
#  disable_download  :boolean          default(FALSE)
#  name              :string
#  page_count        :integer
#  price             :decimal(5, 2)
#  release_date      :datetime
#  slug              :string
#  status            :integer          default("draft")
#  video_url         :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  series_id         :bigint
#  store_id          :bigint           not null
#  stripe_price_id   :string
#  stripe_product_id :string
#
# Indexes
#
#  index_products_on_series_id  (series_id)
#  index_products_on_store_id   (store_id)
#
# Foreign Keys
#
#  fk_rails_...  (series_id => series.id)
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
    after(:build) do |product|
      product.issue_cover.attach(
        io: File.open(Rails.root.join("spec", "support", "images", "issue-cover.jpg")),
        filename: "issue-cover.jpg",
        content_type: "image/jpeg"
      )
    end
  end
end
