require 'rails_helper'

RSpec.describe "load home page", type: :feature do
   it "redirects to login page" do
      visit "/"
      click_link 'Login'
      expect(page).to have_content 'Login'
   end

  it "redirects to signup page" do
    visit "/"
    click_link 'Join'
    expect(page).to have_content 'Join Us'
  end

  it "redirects to sell on comix page" do
    visit "/"
    click_link 'Sell on Comix'
    expect(page).to have_content 'Sell with us'
  end

  context "logged in as creator" do
    let(:user) { create(:user, :creator) }

    it 'loads dashboard page' do
      login_as(user, scope: :user)
      visit "/"
      expect(page).to have_content 'Dashboard'
      click_link 'Dashboard'
      expect(page).to have_content 'Dashboard'
    end
  end

  context "logged in as buyer" do
    let(:user) { create(:user) }

    it 'loads dashboard page' do
      login_as(user, scope: :user)
      visit "/"
      expect(page).to have_content 'Sell on Comix'
      click_link 'Sell on Comix'
      expect(page).to have_content 'Sell with us'
    end
  end
end