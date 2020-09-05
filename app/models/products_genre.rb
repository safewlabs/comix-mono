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

class ProductsGenre < ApplicationRecord
  belongs_to :product
  belongs_to :genre
end
