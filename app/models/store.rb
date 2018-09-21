# == Schema Information
#
# Table name: stores
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  description :string
#  slug        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :bigint(8)
#

class Store < ApplicationRecord
  include Sluggable
  
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  has_many :publications
  has_many :products
  has_many :teams
  has_many :users, through: :teams
end
