# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  age_rating   :string
#  name         :string
#  page_count   :integer
#  price        :float
#  release_date :datetime
#  slug         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  store_id     :bigint           not null
#
# Indexes
#
#  index_products_on_store_id  (store_id)
#
# Foreign Keys
#
#  fk_rails_...  (store_id => stores.id)
#
class Product < ApplicationRecord
  include Sluggable

  belongs_to :store
  has_many :collaborations
  has_many :creator_profiles, through: :collaborations

  has_many :products_genres
  has_many :genres, through: :products_genres

  has_one_attached :issue_cover
  has_one_attached :file
  has_rich_text :description
end
