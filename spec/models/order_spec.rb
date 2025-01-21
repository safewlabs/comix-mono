# frozen_string_literal: true

# == Schema Information
#
# Table name: orders
#
#  id              :bigint           not null, primary key
#  order_reference :string
#  status          :integer          default("draft")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  cart_id         :bigint           not null
#  user_id         :bigint           not null
#
# Indexes
#
#  index_orders_on_cart_id  (cart_id)
#  index_orders_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (cart_id => carts.id)
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Order, type: :model do
  let(:order) { create(:order) }

  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:cart) }
    it { should have_many(:line_items) }
  end

  describe "validations" do
    it { should validate_presence_of(:cart_id) }
    it { should validate_presence_of(:user_id) }
  end

  describe "enums" do
    it "defines the correct status values" do
      expect(Order.statuses.keys).to match_array(%w[draft success cancelled failed])
    end
  end
end
