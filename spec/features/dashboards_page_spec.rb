require 'rails_helper'

RSpec.describe "load dashboards page", type: :feature do
  let(:user) { create(:user, :creator) }
  
  it 'loads dashboard page' do
    login_as(user, scope: :user)
    visit "/dashboard"
    expect(page).to have_content 'Dashboar'
  end
end