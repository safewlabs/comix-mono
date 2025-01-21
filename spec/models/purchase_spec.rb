# frozen_string_literal: true

# == Schema Information
#
# Table name: purchases
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_purchases_on_product_id  (product_id)
#  index_purchases_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Purchase, type: :model do
  let(:user) { create(:user) }
  let(:product) { create(:product) }
  let(:purchase) { build(:purchase, user: user, product: product) }

  describe "validations" do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:product_id) }
  end

  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:product) }
  end

  describe "touch" do
    it "touches the user" do
      user = create(:user)
      purchase = create(:purchase, user: user)
      user_updated_at = user.updated_at

      purchase.touch

      expect(user.updated_at).to be > user_updated_at
    end

    it "touches the product" do
      product = create(:product)
      purchase = create(:purchase, product: product)
      product_updated_at = product.updated_at

      purchase.touch

      expect(product.updated_at).to be > product_updated_at
    end
  end
end
