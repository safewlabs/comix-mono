# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Dashboard::Payments", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/dashboard/payments"
      expect([200, 302]).to include(response.status)
    end
  end
end
