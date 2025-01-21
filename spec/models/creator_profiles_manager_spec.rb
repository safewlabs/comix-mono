# frozen_string_literal: true

# == Schema Information
#
# Table name: creator_profiles_managers
#
#  id                 :bigint           not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  creator_profile_id :bigint           not null
#  user_id            :bigint           not null
#
# Indexes
#
#  index_creator_profiles_managers_on_creator_profile_id  (creator_profile_id)
#  index_creator_profiles_managers_on_user_id             (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (creator_profile_id => creator_profiles.id)
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe CreatorProfilesManager, type: :model do
  let(:creator_profiles_manager) { create(:creator_profiles_manager) }

  describe "associations" do
    it { should belong_to(:managed_profiles).class_name("CreatorProfile").with_foreign_key(:creator_profile_id) }
    it { should belong_to(:managers).class_name("User").with_foreign_key(:user_id) }
  end
end
