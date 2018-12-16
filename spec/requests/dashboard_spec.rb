require 'rails_helper'

RSpec.describe "about page", type: :request do
  it "loads about page" do
    get "/dashboard"
    expect(response).to render_template(:index)
    expect(response.body).to include("Dashboard")
  end
end