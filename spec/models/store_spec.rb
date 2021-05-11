# == Schema Information
#
# Table name: stores
#
#  id          :bigint           not null, primary key
#  name        :string
#  description :string
#  user_id     :bigint
#  slug        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :bigint
#
require 'rails_helper'

RSpec.describe Store, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:store) { build(:store) }
  
      it 'has a valid factory' do
        expect(store).to be_valid
      end
    end
    
    context 'with users trait' do
      let(:store) { build(:store, :with_users) }
  
      it 'has a valid factory with store trait' do
        expect(store).to be_valid
      end
    end
    
    context 'with products trait' do
      let(:store) { build(:store, :with_products) }
  
      it 'has a valid factory with store trait' do
        expect(store).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test owner association' do
      let(:store) { build(:store) }
      
      it 'belongs to a user' do
        expect(store).to belong_to(:owner)
      end
    end
    
    context 'test teams association' do
      let(:store) { build(:store, :with_users) }
      
      it 'has many teams' do
        expect(store).to have_many(:teams)
      end
    end
    
    context 'test products association' do
      let(:store) { build(:store, :with_products) }
      
      it 'has many teams' do
        expect(store).to have_many(:products)
      end
    end
    
    context 'test store with publications association' do
      let(:store) { build(:store, :with_publications) }
      
      it 'has many collaborations' do
        expect(store).to have_many(:publications)
      end
    end
  end
  
  describe 'test slug generation' do
    context 'create a slug' do
      let(:store) { build(:store) }
      
      it 'should create a slug for store before_create' do
        store.run_callbacks :create
        expect(store.slug).not_to be_empty
      end
    end
  end
end
