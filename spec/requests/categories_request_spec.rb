require 'rails_helper'

RSpec.describe "Categories", type: :request do
  let(:category) { create(:category) }
  let(:product) { create(:product, category: category) }

  describe "GET /index" do
    it "returns http success" do
      get "/categories"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/categories/#{category.slug}"
      expect(response).to have_http_status(:success)
    end
  end

end
