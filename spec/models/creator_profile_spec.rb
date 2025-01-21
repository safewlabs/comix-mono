# frozen_string_literal: true

# == Schema Information
#
# Table name: creator_profiles
#
#  id         :bigint           not null, primary key
#  bio        :text
#  email      :string
#  facebook   :string
#  instagram  :string
#  name       :string
#  skills     :string
#  slug       :string           not null
#  tiktok     :string
#  twitter    :string
#  website    :string
#  youtube    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_creator_profiles_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe CreatorProfile, type: :model do
  let(:creator_profile) { create(:creator_profile) }

  describe "associations" do
    it { should belong_to(:user).optional }
    it { should have_one_attached(:avatar) }
    it { should have_one_attached(:profile_cover) }
    it { should have_many(:projects_creator_profiles).dependent(:destroy) }
    it { should have_many(:projects).through(:projects_creator_profiles) }
    it { should have_many(:creator_profiles_managers).dependent(:destroy) }
    it { should have_many(:managers).class_name("User").through(:creator_profiles_managers) }
    it { should have_many(:collaborations).dependent(:destroy) }
    it { should have_many(:products).through(:collaborations) }
  end
end
