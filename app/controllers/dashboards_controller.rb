class DashboardsController < ApplicationController
  before_action :authenticate_user!
    
  def index
    authorize :dashboards, :index?
  end
end
