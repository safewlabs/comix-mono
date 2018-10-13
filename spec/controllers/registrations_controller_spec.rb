require 'rails_helper'

RSpec.describe Users::RegistrationsController, type: :controller do
  let(:valid_params) { attributes_for(:user).merge("roles[]" => "buyer") }
  before do
    @request.env["devise.mapping"] = Devise.mappings[:user]
  end
  
  describe 'POST #create' do
    it 'creates a new user' do
      expect {
        post :create, params: valid_params
      }.to change(User, :count).by(1)
    end
  end
  
end