# == Schema Information
#
# Table name: products
#
#  id             :bigint           not null, primary key
#  name           :string
#  description    :text
#  price          :float
#  page_count     :integer
#  release_date   :datetime
#  age_rating     :string
#  store_id       :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  slug           :string
#  publication_id :bigint
#

class Product < ApplicationRecord
  include Sluggable
  
  belongs_to :store
  has_many :collaborations
  has_many :creators, through: :collaborations
  
  has_many :products_genres
  has_many :genres, through: :products_genres
  
  has_many :products_categories
  has_many :categories, through: :products_categories
  has_many :line_items, dependent: :destroy

  has_one_attached :issue_cover
  has_one_attached :file
  
  belongs_to :publication
end
