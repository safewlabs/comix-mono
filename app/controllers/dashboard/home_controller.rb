class Dashboard::HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize Dashboard::Home, :index?
  end
end