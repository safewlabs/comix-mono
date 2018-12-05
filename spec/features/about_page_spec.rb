require 'rails_helper'

RSpec.describe "about us page", type: :feature do
  it "checks if about us page loads correctly" do
    visit "/about"
    expect(page).to have_content 'About us'
  end
end