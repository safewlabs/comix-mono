require 'rails_helper'

RSpec.describe StorePolicy do
  subject { StorePolicy.new(user, store) }
  let(:store) { create(:store) }
  
  context "for a buyer" do
    let(:user) { create(:user) }
    it { should_not permit(:index) }
    it { should_not permit(:new) }
  end
  
  context "for a creator" do
    let(:user) { create(:user, :creator) }
    it { should permit(:index) }
    it { should permit(:new) }
  end
end
