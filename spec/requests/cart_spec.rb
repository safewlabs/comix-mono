# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Carts", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/cart/index"
      expect(response).to have_http_status(:success)
    end
  end
end
