# frozen_string_literal: true

# == Schema Information
#
# Table name: line_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :bigint           not null
#  order_id   :bigint
#  product_id :bigint           not null
#
# Indexes
#
#  index_line_items_on_cart_id     (cart_id)
#  index_line_items_on_order_id    (order_id)
#  index_line_items_on_product_id  (product_id)
#
# Foreign Keys
#
#  fk_rails_...  (cart_id => carts.id)
#  fk_rails_...  (order_id => orders.id)
#  fk_rails_...  (product_id => products.id)
#
require "rails_helper"

RSpec.describe LineItem, type: :model do
  let(:line_item) { create(:line_item) }

  describe "associations" do
    it { should belong_to(:product) }
    it { should belong_to(:cart) }
    it { should belong_to(:order).optional }
  end

  describe "instance methods" do
    let(:product) { create(:product, price: 10) }
    let(:line_item) { create(:line_item, product: product) }

    describe "#total" do
      it "returns the total price of the line item" do
        expect(line_item.total).to eq(10)
      end
    end
  end
end
