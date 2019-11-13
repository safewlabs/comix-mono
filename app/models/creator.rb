# == Schema Information
#
# Table name: creators
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  bio        :text
#  website    :string
#  blog       :string
#  twitter    :string
#  instagram  :string
#  facebook   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slug       :string
#

class Creator < ApplicationRecord
  include Sluggable
  
  has_many :collaborations
  has_many :products, through: :collaborations
  has_one_attached :avatar
end
