require 'rails_helper'

RSpec.describe Publication, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:publication) { build(:publication) }
  
      it 'has a valid factory' do
        expect(publication).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test publication association' do
      let(:publication) { build(:publication) }
      
      it 'belongs to a store' do
        expect(publication).to belong_to(:store)
      end
    end
    
    context 'test publications with product association' do
      let(:publication) { build(:publication, :with_products) }
      
      it 'has many collaborations' do
        expect(publication).to have_many(:products)
      end
    end
  end
end
