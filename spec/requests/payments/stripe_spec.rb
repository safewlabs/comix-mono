# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Payments::Stripes", type: :request do
  describe "GET /checkout" do
    it "returns http success" do
      post "/payments/stripe/checkout"
      expect(response).to have_http_status(:see_other)
    end
  end
end
