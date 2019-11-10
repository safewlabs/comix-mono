require 'rails_helper'

RSpec.describe "genres page", type: :request do
  
  context 'view Genres page' do    
    it "loads dashboard page" do
      get "/genres"
      expect(response).to render_template(:index)
      expect(response.body).to include("Genres")
    end
  end  
end