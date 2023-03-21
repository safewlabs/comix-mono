require 'rails_helper'

RSpec.describe "Payments::Stripes", type: :request do
  describe "GET /checkout" do
    it "returns http success" do
      get "/payments/stripe/checkout"
      expect(response).to have_http_status(:success)
    end
  end

end
