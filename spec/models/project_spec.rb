# frozen_string_literal: true

# == Schema Information
#
# Table name: projects
#
#  id               :bigint           not null, primary key
#  blurb            :text
#  campaign_ends_at :datetime
#  description      :text
#  funding_goal     :decimal(, )
#  funds_raised     :decimal(, )
#  slug             :string           not null
#  status           :integer          default("draft")
#  title            :string
#  video_url        :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :bigint           not null
#
# Indexes
#
#  index_projects_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Project, type: :model do
  let(:project) { create(:project) }

  describe "associations" do
    it { should belong_to(:owner).class_name("User") }
    it { should have_many(:bundles).dependent(:destroy) }
    it { should have_many(:projects_creator_profiles).dependent(:destroy) }
    it { should have_many(:creator_profiles).through(:projects_creator_profiles) }
  end

  describe "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:campaign_ends_at) }
    it { should validate_presence_of(:description) }
  end

  describe "enums" do
    it "defines the correct status values" do
      expect(Project.statuses.keys).to match_array(%w[draft active ended archived])
    end
  end

  describe "instance methods" do
    let(:project) { FactoryBot.create(:project, funding_goal: 100, funds_raised: 50) }

    describe "#days_to_go" do
      it "returns the difference in days between now and the campaign_ends_at date" do
        expect(project.days_to_go).to be_a(Integer)
      end
    end

    describe "#funding_status" do
      it "returns the percentage of funds raised" do
        expect(project.funding_status).to eq(50)
      end
    end
  end
end
