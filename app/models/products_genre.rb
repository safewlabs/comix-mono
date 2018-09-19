class ProductsGenre < ApplicationRecord
  belongs_to :product
  belongs_to :genre
end
