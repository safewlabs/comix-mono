require 'rails_helper'

RSpec.describe "Fcbds", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/fcbd/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /success" do
    it "returns http success" do
      get "/fcbd/success"
      expect(response).to have_http_status(:success)
    end
  end

end
