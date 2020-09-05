# == Schema Information
#
# Table name: stores
#
#  id          :bigint           not null, primary key
#  name        :string
#  description :string
#  user_id     :bigint
#  slug        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :bigint
#

class Store < ApplicationRecord
  include Sluggable
  
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  has_many :publications
  has_many :products
  has_many :teams
  has_many :users, through: :teams
  has_one_attached :cover_image
  has_one_attached :display_image
  has_rich_text :description

  validates :name, :cover_image, :display_image, :description, presence: true
end
