# frozen_string_literal: true

# == Schema Information
#
# Table name: admin_users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_admin_users_on_email                 (email) UNIQUE
#  index_admin_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require "rails_helper"

RSpec.describe AdminUser, type: :model do
  let(:admin_user) { create(:admin_user) }

  describe "associations" do
    it { should have_and_belong_to_many(:roles) }
  end

  describe "validations" do
    # it { should validate_presence_of(:email).with_default("") }
    it { should validate_uniqueness_of(:email).case_insensitive }
  end

  describe "roles" do
    it "is an admin" do
      expect(admin_user.has_role?(:admin)).to be true
    end
  end
end
