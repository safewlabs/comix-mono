# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Admin::Stores", type: :request do
  describe "GET /index" do
    let(:admin_user) { create(:admin_user) }
    before do
      sign_in admin_user
    end
  end
  
  describe "GET /index" do
    pending "add some examples (or delete) #{__FILE__}"
  end
end
