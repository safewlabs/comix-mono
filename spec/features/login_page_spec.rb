require 'rails_helper'

RSpec.describe "load login page", type: :feature do
  def login(email, password)
    visit "/users/sign_in"
    fill_in "user[email]", with: email
    fill_in "user[password]", with: password
    click_button 'Login'
  end

  it "checks if sign up page loads correctly" do
    visit "/users/sign_in"
    expect(page).to have_content 'Login'
  end
  
  describe 'successful login in' do
    let(:user) { create(:user) }

    it "logs in successfully with matching credentials" do
      visit new_user_session_path
      fill_in "user[email]", with: user[:email]
      fill_in "user[password]", with: 'password'
      click_button "Login"
      expect(page).to have_content "Profile"
    end
  end
  
  describe 'unsuccessful login in' do
    let(:user) { create(:user) }

    it "slogin fails without matching password" do
      visit new_user_session_path
      fill_in "user[email]", with: user[:email]
      fill_in "user[password]", with: 'password456'
      click_button "Login"
      expect(page).to have_content "Invalid Email or password."
    end
    
    it "slogin fails without matching email" do
      visit new_user_session_path
      fill_in "user[email]", with: 'test@pass.com'
      fill_in "user[password]", with: 'password'
      click_button "Login"
      expect(page).to have_content "Invalid Email or password."
    end
  end
  
end