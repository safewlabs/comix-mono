# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Carts", type: :request do
  describe "GET /show" do
    before do
      @cart = Cart.create
      session = { cart_id: @cart.id }
      allow_any_instance_of(ApplicationController).to receive(:session).and_return(session)
    end

    it "returns http success" do
      get "/cart/#{@cart.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
