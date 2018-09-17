require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:product) { build(:product) }
  
      it 'has a valid factory' do
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
    end
  end
end
