class Publication < ApplicationRecord
  has_many :products
  belongs_to :store
end
