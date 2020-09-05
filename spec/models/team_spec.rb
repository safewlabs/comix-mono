# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  store_id   :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Team, type: :model do
  describe 'test factory' do
    context 'without trait' do
      let(:team) { build(:team) }
  
      it 'has a valid factory' do
        expect(team).to be_valid
      end
    end
  end
end
