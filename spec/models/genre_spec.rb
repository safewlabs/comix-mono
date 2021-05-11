# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slug       :string
#
require 'rails_helper'

RSpec.describe Genre, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:genre) { build(:genre) }
  
      it 'has a valid factory' do
        expect(genre).to be_valid
      end
    end
    
    context 'with product trait' do
      let(:genre) { build(:genre, :with_products) }
  
      it 'has a valid factory with product trait' do
        expect(genre).to be_valid
      end
    end
  end
  
  describe 'test associations' do
    context 'test products association' do
      let(:genre) { build(:genre, :with_products) }
      
      it 'has many teams' do
        expect(genre).to have_many(:products)
      end
    end
  end
end
