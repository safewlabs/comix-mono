require 'rails_helper'

RSpec.describe "about page", type: :request do
  it "loads about page" do
    get "/about"
    expect(response).to render_template(:about)
    expect(response.body).to include("About us")
  end
end