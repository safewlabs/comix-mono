# == Schema Information
#
# Table name: products
#
#  id           :bigint(8)        not null, primary key
#  name         :string
#  description  :text
#  price        :float
#  page_count   :integer
#  release_date :datetime
#  age_rating   :string
#  store_id     :bigint(8)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  slug         :string
#

class Product < ApplicationRecord
  include Sluggable
  
  belongs_to :store
  has_many :collaborations
  has_many :creators, through: :collaborations
end
