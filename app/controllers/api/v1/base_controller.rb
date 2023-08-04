# frozen_string_literal: true

class Api::V1::BaseController < ActionController::Base
  protect_from_forgery with: :null_session
  include GraphqlDevise::SetUserByToken
end
