# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slug       :string
#

class Category < ApplicationRecord
  include Sluggable

  has_many :products_categories
  has_many :products, through: :products_categories
end
