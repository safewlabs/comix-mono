# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
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
      
      context 'with creator trait' do
        let(:user) { build_stubbed(:user, :creator) }

        it 'has a valid factory with creator trait' do
          expect(user).to be_valid
        end
      end
    end

    describe 'role assignment when generating factories' do
      context 'as buyer' do
        let(:user) { create(:user) }
        
        it 'has just the role of buyer when buyer' do
          expect(user.has_role? :buyer).to be true
        end
      end

      context 'as creator' do
        let(:user) { create(:user, :creator) }
        
        it 'has roles of both buyer and creator when user is a creator' do
          expect(user.has_role? :buyer).to be true
          expect(user.has_role? :creator).to be true
        end
      end

      context 'with stores' do
        let(:user) { create(:user, :with_stores) }
        
        it 'has roles of both buyer and creator when has a store' do
          expect(user.has_role? :buyer).to be true
          expect(user.has_role? :creator).to be true
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
