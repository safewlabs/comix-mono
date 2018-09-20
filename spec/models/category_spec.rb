require 'rails_helper'

RSpec.describe Category, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:category) { build(:category) }
  
      it 'has a valid factory' do
        expect(category).to be_valid
      end
    end
  end
end
