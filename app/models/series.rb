# == Schema Information
#
# Table name: series
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Series < ApplicationRecord
  has_many :products
end
