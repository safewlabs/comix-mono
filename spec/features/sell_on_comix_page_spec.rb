require 'rails_helper'

RSpec.describe "load home page", type: :feature do
   it "redirects to Sell on Comix Page" do
      visit "/sell-on-comix"
      expect(page).to have_content 'Sell with us'
      expect(page).to have_content 'Create & Post your work.'
      expect(page).to have_content 'Get discovered'
      expect(page).to have_content 'Speak directly with your fans.'
   end

  it "redirects to creator signup page" do
    visit "/sell-on-comix"
    click_link 'Start Selling'
    expect(page).to have_content 'Start selling with us'
  end
end