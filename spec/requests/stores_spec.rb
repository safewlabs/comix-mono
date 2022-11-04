# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Stores", type: :request do
  let(:stores) { create_list(:store, 5) }

  describe "GET /show" do
    it "returns http success" do
      get "/stores/#{stores.first.slug}"
      expect(response).to have_http_status(:success)
    end
  end
end
