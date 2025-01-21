# frozen_string_literal: true

# == Schema Information
#
# Table name: backings
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bundle_id  :bigint           not null
#  project_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_backings_on_bundle_id   (bundle_id)
#  index_backings_on_project_id  (project_id)
#  index_backings_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (bundle_id => bundles.id)
#  fk_rails_...  (project_id => projects.id)
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Backing, type: :model do
  let(:backing) { create(:backing) }

  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:project) }
    it { should belong_to(:bundle) }
  end

  describe "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:project) }
    it { should validate_presence_of(:bundle) }
  end
end
