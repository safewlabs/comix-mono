# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id                :bigint           not null, primary key
#  age_rating        :string
#  description       :text
#  disable_download  :boolean          default(FALSE)
#  name              :string
#  page_count        :integer
#  price             :decimal(5, 2)
#  release_date      :datetime
#  slug              :string
#  status            :integer          default("draft")
#  video_url         :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  store_id          :bigint           not null
#  stripe_price_id   :string
#  stripe_product_id :string
#
# Indexes
#
#  index_products_on_store_id  (store_id)
#
# Foreign Keys
#
#  fk_rails_...  (store_id => stores.id)
#
require "rails_helper"

RSpec.describe Product, type: :model do
  let(:product) { create(:product) }

  describe "validations" do
    it { should validate_numericality_of(:price).is_greater_than_or_equal_to(0) }
    it { should validate_presence_of(:store_id) }
  end

  describe "associations" do
    it { should belong_to(:store) }
    it { should have_many(:collaborations).dependent(:destroy) }
    it { should have_many(:creator_profiles).through(:collaborations) }
    it { should have_many(:product_genres).dependent(:destroy) }
    it { should have_many(:genres).through(:product_genres) }
    it { should have_many(:line_items) }
    it { should have_many(:purchases).dependent(:destroy) }
    it { should have_many(:user).through(:purchases) }
    it { should have_one_attached(:issue_cover) }
    it { should have_one_attached(:file_attachment) }
  end

  describe "enums" do
    it { should define_enum_for(:status).with_values(draft: 0, published: 1, unpublished: 2) }
  end

  describe "methods" do
    let(:product) { create(:product, price: 10.00) }
    let(:store) { product.store }

    describe "#formatted_price" do
      it "returns the price formatted as USD" do
        expect(product.formatted_price).to eq("$10.00")
      end
    end

    describe "#store_name" do
      it "returns the name of the store" do
        expect(product.store_name).to eq(store.name)
      end
    end

    describe "#is_purchased?" do
      let(:user) { create(:user) }
      let!(:purchase) { create(:purchase, user: user, product: product) }

      it "returns true if the product is purchased by the user" do
        expect(product.is_purchased?(user)).to eq(purchase)
      end

      it "returns nil if the product is not purchased by the user" do
        another_user = create(:user)
        expect(product.is_purchased?(another_user)).to be_nil
      end
    end
  end
end
