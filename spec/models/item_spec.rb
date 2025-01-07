# frozen_string_literal: true

# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  description :text
#  slug        :string           not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  bundle_id   :bigint           not null
#
# Indexes
#
#  index_items_on_bundle_id  (bundle_id)
#
# Foreign Keys
#
#  fk_rails_...  (bundle_id => bundles.id)
#
require "rails_helper"

RSpec.describe Item, type: :model do
  let(:item) { create(:item) }

  describe "associations" do
    it { should belong_to(:bundle) }
  end

  describe "validations" do
    it { should validate_presence_of(:bundle_id) }
  end

  describe "instance methods" do
    describe "#to_param" do
      it "returns the slug" do
        expect(item.to_param).to eq(item.slug)
      end
    end
  end

  describe "sluggable module" do
    it "does not change the slug on update" do
      item = build(:item)
      item.save
      old_slug = item.slug
      item.update(title: "New Title")
      expect(item.slug).to eq(old_slug)
    end
  end
end
