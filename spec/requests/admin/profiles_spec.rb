# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Admin::Profiles", type: :request do
  describe "GET /index" do
    let(:admin_user) { create(:admin_user) }
    before do
      sign_in admin_user
    end
  end
  
  describe "GET /index" do
    it "returns http success" do
      get "/admin/creator_profiles"
      expect(response).to have_http_status(:success)
    end
  end


  describe "GET /new" do
    it "returns http success" do
      get "/admin/creator_profiles/new"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /edit" do
    it "returns http success" do
      get "/admin/creator_profiles/edit"
      expect(response).to have_http_status(:success)
    end
  end
end
