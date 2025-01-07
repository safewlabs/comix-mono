# frozen_string_literal: true

require "rails_helper"

RSpec.describe ProjectsCreatorProfile, type: :model do
  let(:projects_creator_profile) { create(:projects_creator_profile) }

  it "has a valid factory" do
    expect(projects_creator_profile).to be_valid
  end

  describe "associations" do
    it { should belong_to(:project) }
    it { should belong_to(:creator_profile) }
  end

  describe "validations" do
    it { should validate_presence_of(:project) }
    it { should validate_presence_of(:creator_profile) }
  end
end
