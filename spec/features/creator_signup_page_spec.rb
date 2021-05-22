require 'rails_helper'

RSpec.describe "load sign up page", type: :feature do
  it "checks if sign up page loads correctly" do
    visit "/creator-signup"
    expect(page).to have_content 'Start selling with us'
  end

  describe 'successful sign up as a creator' do
    let(:user) { attributes_for(:user) }

    it "signs up successfully as a creator with matching credentials" do
      visit "/creator-signup"
      fill_in "user[email]", with: user[:email]
      fill_in "user[password]", with: user[:password]
      fill_in "user[password_confirmation]", with: user[:password]
      click_button "Join"
      expect(page).to have_content "Let's setup your Store"
    end
  end

  describe 'unsuccessful sign up scenarios for creators' do
    context 'passwords not matching' do
      let(:user) { attributes_for(:user) }

      it "signs up successfully with matching credentials" do
        visit "/creator-signup"
        fill_in "user[email]", with: user[:email]
        fill_in "user[password]", with: user[:password]
        fill_in "user[password_confirmation]", with: SecureRandom.alphanumeric(8)
        click_button "Join"
        expect(page).to have_content "1 error prohibited this user from being saved:"
        expect(page).to have_content "Password confirmation doesn't match Password"
      end
    end

    context 'passwords not matching' do
      let(:user) { attributes_for(:user) }

      it "signs up successfully with matching credentials" do
        visit "/creator-signup"
        fill_in "user[email]", with: user[:email]
        fill_in "user[password]", with: SecureRandom.alphanumeric(5)
        fill_in "user[password_confirmation]", with: SecureRandom.alphanumeric(5)
        click_button "Join"
        expect(page).to have_content "Password is too short (minimum is 6 characters)"
      end
    end
  end
end