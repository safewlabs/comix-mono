# == Schema Information
#
# Table name: collaborations
#
#  id                 :bigint           not null, primary key
#  product_id         :bigint
#  creator_id         :bigint
#  collaboration_type :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Collaboration < ApplicationRecord
  belongs_to :product
  belongs_to :creator
end
