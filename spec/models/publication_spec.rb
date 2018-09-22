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
  
  describe 'test slug generation' do
    context 'create a slug' do
      let(:publication) { build_stubbed(:publication) }
      
      it 'should create a slug for publication before_create' do
        publication.run_callbacks :create
        expect(publication.slug).not_to be_empty
      end
    end
  end
end
