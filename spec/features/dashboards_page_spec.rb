require 'rails_helper'

RSpec.describe "load dashboards page", type: :feature do
  context 'dashboard page is accessible by a creator' do
    let(:user) { create(:user, :creator) }
  
    it 'loads dashboard page' do
      login_as(user, scope: :user)
      visit "/dashboard"
      expect(page).to have_content 'Dashboard'
    end
  end
  
  context 'dashboard page is not accessible by a creator' do
    let(:user) { create(:user) }
  
    it 'loads dashboard page' do
      login_as(user, scope: :user)
      visit "/dashboard"
      expect(page).to have_content 'You are not allowed to access this page!'
    end
  end
end