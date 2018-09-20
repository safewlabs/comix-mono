# == Schema Information
#
# Table name: products_genres
#
#  id         :bigint(8)        not null, primary key
#  product_id :bigint(8)
#  genre_id   :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProductsGenre < ApplicationRecord
  belongs_to :product
  belongs_to :genre
end
