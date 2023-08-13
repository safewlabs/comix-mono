# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id                :bigint           not null, primary key
#  age_rating        :string
#  description       :text
#  name              :string
#  page_count        :integer
#  price             :decimal(5, 2)
#  release_date      :datetime
#  slug              :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  store_id          :bigint           not null
#  stripe_price_id   :string
#  stripe_product_id :string
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
  include PgSearch::Model
  pg_search_scope :search_comics, against: [:name, :description], associated_against: {
    store: [:name],
    creator_profiles: [:name],
    genres: [:name]
  }

  belongs_to :store, touch: true
  has_many :collaborations, dependent: :destroy
  has_many :creator_profiles, through: :collaborations

  has_many :product_genres, dependent: :destroy
  has_many :genres, through: :product_genres

  has_many :purchases, dependent: :destroy
  has_many :user, through: :purchases

  has_one_attached :issue_cover, dependent: :destroy
  has_one_attached :file_attachment, dependent: :destroy
end
