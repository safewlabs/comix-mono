# frozen_string_literal: true

# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string
#  status     :integer          default("published")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "rails_helper"

RSpec.describe Genre, type: :model do
  let(:genre) { create(:genre) }

  describe "validations" do
    it { should validate_uniqueness_of(:name) }
  end

  describe "associations" do
    it { should have_many(:product_genres) }
    it { should have_many(:products).through(:product_genres) }
  end

  describe "enums" do
    it { should define_enum_for(:status).with_values(published: 0, unpublished: 1) }
  end
end
