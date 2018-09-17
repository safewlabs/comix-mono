class Product < ApplicationRecord
  include Sluggable
  
  belongs_to :store
end
