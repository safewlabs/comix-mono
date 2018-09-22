# == Schema Information
#
# Table name: publications
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  bio        :text
#  type       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  store_id   :bigint(8)
#  slug       :string
#

class Publication < ApplicationRecord
  include Sluggable
  
  has_many :products
  belongs_to :store
end
