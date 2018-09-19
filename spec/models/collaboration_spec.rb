require 'rails_helper'

RSpec.describe Collaboration, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:collaboration) { build(:collaboration) }
  
      it 'has a valid factory' do
        expect(collaboration).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test owner association' do
      let(:collaboration) { build(:collaboration) }
    
      it 'belongs to a user' do
        expect(collaboration).to belong_to(:creator)
        expect(collaboration).to belong_to(:product)
      end
    end
  end
end
