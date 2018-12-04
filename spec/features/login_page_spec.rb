require 'rails_helper'

RSpec.describe "load login page", type: :feature do
  def login(email, password)
    visit "/users/sign_in"
    fill_in "user[email]", with: email
    fill_in "user[password]", with: password
    click_button 'Log in'
  end

  it "checks if sign up page loads correctly" do
    visit "/users/sign_in"
    expect(page).to have_content 'Log in'
  end
  
  describe 'successful login in' do
    let(:user) { create(:user, password: 'password123', password_confirmation: 'password123') }

    it "logs in successfully with matching credentials" do
      visit new_user_session_path
      fill_in "user[email]", with: user[:email]
      fill_in "user[password]", with: 'password123'
      click_button "Log in"
      expect(page).to have_content "Logged in as #{user[:email]}"
    end
  end
  
  describe 'unsuccessful login in' do
    let(:user) { create(:user, password: 'password123', password_confirmation: 'password123') }

    it "signs up successfully with matching credentials" do
      visit new_user_session_path
      fill_in "user[email]", with: user[:email]
      fill_in "user[password]", with: 'password456'
      click_button "Log in"
      expect(page).to have_content "Invalid Email or password."
    end
  end
  
end