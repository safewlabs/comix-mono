class Dashboard::HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize :dashboard, :index?
  end
end