# == Schema Information
#
# Table name: collaborations
#
#  id                 :bigint           not null, primary key
#  product_id         :bigint
#  creator_id         :bigint
#  collaboration_type :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
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
    context 'test fk associations' do
      let(:collaboration) { build(:collaboration) }
    
      it 'belongs to a creator and a product' do
        expect(collaboration).to belong_to(:creator)
        expect(collaboration).to belong_to(:product)
      end
    end
  end
end
