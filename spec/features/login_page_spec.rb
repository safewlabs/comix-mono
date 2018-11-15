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
#   describe 'successful sign up' do
#     let(:user) { attributes_for(:user) }
#     it "signs up successfully with matching credentials" do

#     end
#   end
end