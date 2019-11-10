require 'rails_helper'

RSpec.describe "load genres page", type: :feature do
  context 'genres page is accessible by everyone' do
  
    it 'loads dashboard page' do
      visit "/genres"
      expect(page).to have_content 'Genres'
    end
  end
end