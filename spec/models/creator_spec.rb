require 'rails_helper'

RSpec.describe Creator, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:creator) { build(:creator) }
  
      it 'has a valid factory' do
        expect(creator).to be_valid
      end
    end
    
    context 'with collaborators trait' do
      let(:creator) { build(:creator, :with_collaborations) }
  
      it 'has a valid factory with store trait' do
        expect(creator).to be_valid
      end
    end
  end
end
