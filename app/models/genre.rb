class Genre < ApplicationRecord
    has_many :mappings
    has_many :products, through: :mappings
end
