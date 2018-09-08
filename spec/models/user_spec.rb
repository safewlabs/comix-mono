require 'rails_helper'

RSpec.describe User, type: :model do
    describe 'test factory' do
      context 'without trait' do
        let(:user) { build(:user) }
  
        it 'has a valid factory' do
          expect(user).to be_valid
        end
      end
    
      context 'with store trait' do
        let(:user) { build(:user, :with_stores) }
  
        it 'has a valid factory with store trait' do
          expect(user).to be_valid
        end
      end
    end
  
    describe 'test associations' do
      context 'test owner association' do
        let(:user) { build(:user) }
      
        it 'has many stores' do
          expect(user).to have_many(:stores)
        end
      end
      
      context 'test teams association' do
        let(:user) { build(:user, :with_stores) }
      
        it 'has many teams' do
          expect(user).to have_many(:teams)
        end
      end
    end
end
