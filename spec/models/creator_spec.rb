# == Schema Information
#
# Table name: creators
#
#  id         :bigint           not null, primary key
#  name       :string
#  bio        :text
#  website    :string
#  blog       :string
#  twitter    :string
#  instagram  :string
#  facebook   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slug       :string
#
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
  
  describe 'test slug generation' do
    context 'create a slug' do
      let(:creator) { build_stubbed(:creator) }
      
      it 'should create a slug for creator before_create' do
        creator.run_callbacks :create
        expect(creator.slug).not_to be_empty
      end
    end
  end
end
