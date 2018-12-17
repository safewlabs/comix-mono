require 'rails_helper'

RSpec.describe DashboardsPolicy do
  subject { DashboardsPolicy.new(user) }
  
  context "for a buyer" do
    let(:user) { create(:user) }
    it { should_not permit(:index) }
  end
  
  context "for a creator" do
    let(:user) { create(:user, :creator) }
    it { should permit(:index) }
  end
end
