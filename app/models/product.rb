# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id                :bigint           not null, primary key
#  age_rating        :string
#  description       :text
#  disable_download  :boolean          default(FALSE)
#  name              :string
#  page_count        :integer
#  price             :decimal(5, 2)
#  release_date      :datetime
#  slug              :string
#  status            :integer          default("draft")
#  video_url         :string
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

  has_many :line_items
  has_many :purchases, dependent: :destroy
  has_many :user, through: :purchases

  has_one_attached :issue_cover, dependent: :destroy do |attachable|
    attachable.variant :thumb, resize_to_fill: [150, 200]
  end
  has_one_attached :file_attachment, dependent: :destroy

  enum status: {
    draft: 0,
    published: 1,
    unpublished: 2
  }

  def formatted_price
    Money.new(price * 100, "USD").format
  end

  def store_name
    store.name
  end

  def is_purchased?(user)
    purchases.find_by(user:)
  end
end
