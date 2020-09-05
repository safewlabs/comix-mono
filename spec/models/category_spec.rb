# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Category, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:category) { build(:category) }
  
      it 'has a valid factory' do
        expect(category).to be_valid
      end
    end
    
    context 'with products trait' do
      let(:category) { build(:category, :with_products) }
  
      it 'has a valid factory with store trait' do
        expect(category).to be_valid
      end
    end
  end

  describe 'test associations' do
    context 'test products_category association' do
      let(:category) { build(:category, :with_products) }
      
      it 'has many products' do
        expect(category).to have_many(:products)
      end
    end
  end
end
