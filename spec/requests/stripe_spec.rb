# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Stripes", type: :request do
  let(:user) { create(:user) }
  before do
    sign_in user
  end
  describe "GET /connect" do
    it "returns http success" do
      get "/stripe/connect"
      expect([200, 302]).to include response.status
    end
  end
end
