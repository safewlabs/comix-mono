# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id                :bigint           not null, primary key
#  age_rating        :string
#  description       :text
#  name              :string
#  page_count        :integer
#  price             :decimal(5, 2)
#  release_date      :datetime
#  slug              :string
#  video_url         :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  store_id          :bigint           not null
#  stripe_price_id   :string
#  stripe_product_id :string
#
# Indexes
#
#  index_products_on_store_id  (store_id)
#
# Foreign Keys
#
#  fk_rails_...  (store_id => stores.id)
#
require "rails_helper"

RSpec.describe Product, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
