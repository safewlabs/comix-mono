class Store < ApplicationRecord
  include Sluggable
  
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  has_many :products
  has_many :teams
  has_many :users, through: :teams
end