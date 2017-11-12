class ApplicationController < ActionController::Base
  include Pundit  
  protect_from_forgery with: :exception

  protected
  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || stored_location_for(resource) || dashboard_path
  end
end
