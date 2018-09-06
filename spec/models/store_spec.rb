require 'rails_helper'

RSpec.describe Store, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:store) { build(:store) }
  
      it 'has a valid factory' do
        expect(store).to be_valid
      end
    end
    
    context 'with store trait' do
      let(:store) { build(:store, :with_users) }
  
      it 'has a valid factory with store trait' do
        expect(store).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test teams association' do
      let(:store) { build(:store, :with_users) }
      
      it 'has many teams' do
        expect(store).to have_many(:teams)
      end
    end
  end
end
