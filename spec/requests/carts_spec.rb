require 'rails_helper'

RSpec.describe "Carts", type: :request do
  let(:user) { create(:user) }

  context "GET /current cart" do
    it "returns http success" do
      sign_in user
      get "/carts/current"
      expect(response).to have_http_status(:success)
    end
  end

end
