require 'rails_helper'

RSpec.describe ProductsGenre, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:products_genre) { build(:products_genre) }
  
      it 'has a valid factory' do
        expect(products_genre).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test fk association' do
      let(:products_genre) { build(:products_genre) }
    
      it 'belongs to a genre and product' do
        expect(products_genre).to belong_to(:genre)
        expect(products_genre).to belong_to(:product)
      end
    end
  end
end
