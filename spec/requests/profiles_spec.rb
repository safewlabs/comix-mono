# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Profiles", type: :request do
  let!(:creator_profile) { create(:creator_profile) }

  describe "GET /show" do
    it "returns http success" do
      get "/profiles/#{creator_profile.slug}"
      expect(response).to have_http_status(:success)
    end
  end
end
