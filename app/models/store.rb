class Store < ApplicationRecord
  belongs_to :member
  has_many :products
end
