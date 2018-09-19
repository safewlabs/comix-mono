class Genre < ApplicationRecord
  has_many :products_genres
  has_many :products, through: :products_genres
end
