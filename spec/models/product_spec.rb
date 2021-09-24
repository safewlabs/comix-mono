# == Schema Information
#
# Table name: products
#
#  id             :bigint           not null, primary key
#  name           :string
#  price          :float
#  page_count     :integer
#  release_date   :datetime
#  age_rating     :string
#  store_id       :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  slug           :string
#  publication_id :bigint
#
require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:product) { build(:product) }
  
      it 'has a valid factory' do
        expect(product).to be_valid
      end
    end

    context 'with collaborators trait' do
      let(:product) { build(:product, :with_collaborators) }
  
      it 'has a valid factory with store trait' do
        expect(product).to be_valid
      end
    end

    context 'with genres trait' do
      let(:product) { build(:product, :with_genres) }
  
      it 'has a valid factory with store trait' do
        expect(product).to be_valid
      end
    end

    context 'with categories trait' do
      let(:product) { build(:product, :with_categories) }
  
      it 'has a valid factory with store trait' do
        expect(product).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test store association' do
      let(:product) { build(:product) }
      
      it 'belongs to a store' do
        expect(product).to belong_to(:store)
      end

      it 'belongs to a publiction' do
        expect(product).to belong_to(:publication)
      end
    end

    context 'test collaborators association' do
      let(:product) { build(:product, :with_collaborators) }
      
      it 'has many collaborations' do
        expect(product).to have_many(:collaborations)
      end
    end
    
    context 'test products_genre association' do
      let(:product) { build(:product, :with_genres) }
      
      it 'has many genres' do
        expect(product).to have_many(:genres)
      end
    end

    context 'test products_category association' do
      let(:product) { build(:product, :with_categories) }
      
      it 'has many categories' do
        expect(product).to have_many(:categories)
      end
    end
  end

  describe 'test slug generation' do
    context 'create a slug' do
      let(:product) { build_stubbed(:product) }
      
      it 'should create a slug for product before_create' do
        product.run_callbacks :create
        expect(product.slug).not_to be_empty
      end
    end
  end
end
