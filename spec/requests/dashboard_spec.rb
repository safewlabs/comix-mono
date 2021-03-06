require 'rails_helper'

RSpec.describe "dashboard page", type: :request do
  
  context 'view dashboard page as a creator' do
    let(:user) { create(:user, :creator) }
    
    it "loads dashboard page" do
      sign_in user
      get "/dashboard"
      expect(response).to render_template(:index)
      expect(response.body).to include("Dashboard")
    end
  end
  
  context 'do not view dashboard page if not authorized' do
    let(:user) { create(:user) }
    
    it "redirectes to sign in page when accessing dashboard page when not logged in" do
      get "/dashboard"
      expect(response).to redirect_to new_user_session_path
    end
    
    it "redirectes to sign up page when accessing dashboard page when not logged in" do
      sign_in user
      get "/dashboard"
      expect(response).to redirect_to root_path
    end
  end
  
end