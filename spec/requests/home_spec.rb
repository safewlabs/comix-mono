require 'rails_helper'

RSpec.describe "home page", type: :request do
  it "loads home page" do
    get "/"
    expect(response).to render_template(:index)
    expect(response.body).to include("Welcome to Comix")
  end

  it "redirects to signup page" do
    get "/users/sign_up"
    expect(response).to render_template(:new)
    expect(response.body).to include("Join Us")
  end

  it "redirects to signup page" do
    get "/users/sign_in"
    expect(response).to render_template(:new)
    expect(response.body).to include("Log in")
  end

  it "redirects to sell on comix page" do
    get "/sell-on-comix"
    expect(response).to render_template(:creator)
    expect(response.body).to include("Start selling with us")
  end
end