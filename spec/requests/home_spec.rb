require 'rails_helper'

RSpec.describe "home page", type: :request do
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
    get "/sell-on-comix"
    expect(response).to render_template(:creator)
    expect(response.body).to include("Start selling with us")
  end
end