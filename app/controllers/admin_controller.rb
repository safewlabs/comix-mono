# frozen_string_literal: true

class AdminController < ApplicationController
  before_action :authenticate_admin_user!
end
