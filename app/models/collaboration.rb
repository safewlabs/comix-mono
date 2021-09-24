# == Schema Information
#
# Table name: collaborations
#
#  id                 :bigint           not null, primary key
#  product_id         :bigint
#  creator_id         :bigint
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  collaboration_type :integer          default("writer")
#

class Collaboration < ApplicationRecord
  belongs_to :product
  belongs_to :creator

  enum collaboration_type: { writer: 0, artist: 1, letterrer: 2, color: 3 }
end
