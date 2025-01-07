# frozen_string_literal: true

# == Schema Information
#
# Table name: product_genres
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  genre_id   :bigint           not null
#  product_id :bigint           not null
#
# Indexes
#
#  index_product_genres_on_genre_id    (genre_id)
#  index_product_genres_on_product_id  (product_id)
#
# Foreign Keys
#
#  fk_rails_...  (genre_id => genres.id)
#  fk_rails_...  (product_id => products.id)
#
require "rails_helper"

RSpec.describe ProductGenre, type: :model do
  let(:product_genre) { create(:product_genre) }

  describe "associations" do
    it { should belong_to(:product).touch(true) }
    it { should belong_to(:genre).touch(true) }
  end

  describe "validations" do
    it { should validate_presence_of(:product) }
    it { should validate_presence_of(:genre) }
  end

 describe "product" do
    it "returns the product" do
      expect(product_genre.product).to be_a(Product)
    end

    it "returns the correct product" do
      expect(product_genre.product).to eq(product_genre.product)
    end

    it "touches the product" do
      product = product_genre.product
      expect { product_genre.touch }.to change(product, :updated_at)
    end
  end

  describe "genre" do
    it "returns the genre" do
      expect(product_genre.genre).to be_a(Genre)
    end

    it "touches the genre" do
      genre = product_genre.genre
      expect { product_genre.touch }.to change(genre, :updated_at)
    end

    it "returns the correct genre" do
      expect(product_genre.genre).to eq(product_genre.genre)
    end

  end
end
