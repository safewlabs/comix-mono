# == Schema Information
#
# Table name: publications
#
#  id               :bigint           not null, primary key
#  name             :string
#  bio              :text
#  publication_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  store_id         :bigint
#  slug             :string
#

class Publication < ApplicationRecord
  include Sluggable
  
  has_many :products
  belongs_to :store
end
