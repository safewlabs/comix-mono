# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
  has_many :products_genres
  has_many :products, through: :products_genres
end
