# frozen_string_literal: true

# == Schema Information
#
# Table name: collaborations
#
#  id                 :bigint           not null, primary key
#  collaboration_type :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  creator_profile_id :bigint           not null
#  product_id         :bigint           not null
#
# Indexes
#
#  index_collaborations_on_creator_profile_id  (creator_profile_id)
#  index_collaborations_on_product_id          (product_id)
#
# Foreign Keys
#
#  fk_rails_...  (creator_profile_id => creator_profiles.id)
#  fk_rails_...  (product_id => products.id)
#
class Collaboration < ApplicationRecord
  belongs_to :product, touch: true
  belongs_to :creator_profile, touch: true

  enum collaboration_type: { writer: 0, artist: 1, letterrer: 2, color: 3 }
end
