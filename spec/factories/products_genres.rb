# == Schema Information
#
# Table name: products_genres
#
#  id         :bigint           not null, primary key
#  product_id :bigint
#  genre_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :products_genre do
    association :product, factory: :product
    association :genre, factory: :genre
  end
end
