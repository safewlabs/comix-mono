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
  let(:collaboration) { create(:collaboration) }

  describe "associations" do
    it { should belong_to(:product).touch(true) }
    it { should belong_to(:creator_profile).touch(true) }
  end

  describe "enums" do
    it "defines the correct collaboration_type values" do
      expect(Collaboration.collaboration_types.keys).to match_array(%w[writer artist letterer color])
    end
  end
end
