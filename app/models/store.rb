class Store < ApplicationRecord
  include Sluggable
  
  has_many :teams
  has_many :users, through: :teams
end
