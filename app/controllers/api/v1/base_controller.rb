# frozen_string_literal: true

class Api::V1::BaseController < ActionController::Base
  include GraphqlDevise::SetUserByToken
end
