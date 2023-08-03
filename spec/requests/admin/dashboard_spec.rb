# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Admin::Dashboards", type: :request do
  let(:admin_user) { create(:admin_user) }
  before do
    sign_in admin_user
  end
  describe "GET /index" do
    it "returns http success" do
      get "/admin"
      expect(response).to have_http_status(:success)
    end
  end
end
