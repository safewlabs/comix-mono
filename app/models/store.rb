# frozen_string_literal: true

# == Schema Information
#
# Table name: stores
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_stores_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Store < ApplicationRecord
  include Sluggable

  belongs_to :user
  has_many :products
  has_one_attached :cover_image
  has_one_attached :display_image
  has_rich_text :description

  validates :name, :cover_image, :display_image, :description, presence: true
end
