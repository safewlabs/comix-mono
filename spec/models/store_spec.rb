require 'rails_helper'

RSpec.describe Store, type: :model do
  let(:store) { build(:store) }
  
  it 'has a valid factory' do
    expect(store).to be_valid
  end
end
