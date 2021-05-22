require 'rails_helper'

RSpec.describe "Carts", type: :request do
  let(:user) { create(:user) }
  let(:cart) { create(:cart) }

  context "GET /current cart" do
    it "returns http success" do
      sign_in user
      get "/carts/#{cart.id}"
      expect(response).to have_http_status(:success)
    end
  end

end
