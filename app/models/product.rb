class Product < ApplicationRecord
  belongs_to :store
  has_many :mappings
  has_many :genres, through: :mappings
  has_one_attached :comic_file
end
