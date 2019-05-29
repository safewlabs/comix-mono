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
    expect(page).to have_content 'Start selling with us'
  end
end