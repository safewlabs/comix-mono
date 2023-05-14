# frozen_string_literal: true

class API::V1::BaseController < ActionController::Base
  include GraphqlDevise::SetUserByToken
end
