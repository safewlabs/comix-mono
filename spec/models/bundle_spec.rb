# frozen_string_literal: true

# == Schema Information
#
# Table name: bundles
#
#  id            :bigint           not null, primary key
#  description   :text
#  pledge_amount :decimal(, )
#  slug          :string           not null
#  title         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  project_id    :bigint           not null
#
# Indexes
#
#  index_bundles_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#
require "rails_helper"

RSpec.describe Bundle, type: :model do
  let(:bundle) { create(:bundle) }

  describe "associations" do
    it { should belong_to(:project) }
    it { should have_many(:backings) }
    it { should have_many(:items) }
    it { should have_one_attached(:bundle_cover) }
  end

  describe "validations" do
    it { should validate_presence_of(:project_id) }
  end
end
