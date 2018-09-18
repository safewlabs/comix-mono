# == Schema Information
#
# Table name: collaborations
#
#  id                 :bigint(8)        not null, primary key
#  product_id         :bigint(8)
#  creator_id         :bigint(8)
#  collaboration_type :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Collaboration < ApplicationRecord
  belongs_to :product
  belongs_to :creator
end
