require 'rails_helper'

RSpec.describe ProductsCategory, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:products_category) { build(:products_category) }
  
      it 'has a valid factory' do
        expect(products_category).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test fk association' do
      let(:products_category) { build(:products_category) }
    
      it 'belongs to a category and product' do
        expect(products_category).to belong_to(:category)
        expect(products_category).to belong_to(:product)
      end
    end
  end
end
