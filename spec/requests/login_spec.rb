require 'rails_helper'

RSpec.describe "login page", type: :request do
  context "test links on the page" do
    it "redirects to signup page" do
      get "/users/sign_up"
      expect(response).to render_template(:new)
      expect(response.body).to include("Join Us")
    end

    it "redirects to signup page" do
      get "/users/sign_in"
      expect(response).to render_template(:new)
      expect(response.body).to include("Login")
    end

    it "redirects to sell on comix page" do
      get "/users/password/new"
      expect(response).to render_template(:new)
      expect(response.body).to include("Forgot your password?")
    end
  end
end