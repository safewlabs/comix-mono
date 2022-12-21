# frozen_string_literal: true

class Dashboard::BaseController < ApplicationController
  before_action :authenticate_user!
  layout "dashboard"
end
