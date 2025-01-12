# frozen_string_literal: true

# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "rails_helper"

RSpec.describe Cart, type: :model do
  let(:cart) { create(:cart, :with_line_items, line_items_count: 2) }

  describe "associations" do
    it { should have_many(:line_items).dependent(:destroy) }
    it { should have_many(:orders) }
  end

  describe "#total" do
    it "returns the total amount of the cart" do
      product1 = create(:product, price: 10)
      product2 = create(:product, price: 20)
      # let(:line_item) { create(:line_item, product: product) }

      create(:line_item, cart: cart, quantity: 2, product: product1)
      create(:line_item, cart: cart, quantity: 1, product: product2)

      expect(Money.new(cart.total).format).to eq("$40.00")
    end

    it "returns zero when there are no line items" do
      cart.line_items.destroy_all

      expect(cart.total).to eq(0)
    end
  end
end
