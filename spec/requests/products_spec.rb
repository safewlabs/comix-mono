# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Products", type: :request do
  let(:products) { create_list(:product, 5) }

  describe "GET /show" do
    it "returns http success" do
      get "/products/#{products.last.slug}"
      expect(response).to have_http_status(:success)
    end
  end
end
