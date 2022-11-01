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
require "rails_helper"

RSpec.describe Collaboration, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
