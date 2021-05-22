require 'rails_helper'

RSpec.describe "Orders", type: :request do
  let(:user) { create(:user) }
  let(:order) { create(:order, user: user) }

  describe "GET /index" do
    it "returns http success" do
      sign_in user
      get "/orders"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      sign_in user
      get "/orders/#{order.id}"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /new" do
    it "returns http success" do
      sign_in user
      get "/orders/new"
      expect(response).to have_http_status(:success)
    end
  end

end
