require 'rails_helper'

RSpec.describe "store page", type: :request do
  
  context 'view store page as a creator' do
    let(:user) { create(:user, :creator) }
    
    it "loads store page" do
      sign_in user
      get "/stores"
      expect(response).to render_template(:index)
      expect(response.body).to include("Stores")
    end
  end
  
  context 'do not view dashboard page if not authorized' do
    let(:user) { create(:user) }
    
    it "redirectes to sign in page when accessing stores page when not logged in" do
      get "/dashboard"
      expect(response).to redirect_to new_user_session_path
    end
  
  end
  
end