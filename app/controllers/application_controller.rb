# frozen_string_literal: true

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  include Pagy::Backend
  helper_method :current_user
  helper_method :current_admin_user

  protected
    def after_sign_in_path_for(resource)
      if resource.has_role?(:creator)
        dashboard_root_path
      else
        stored_location_for(resource) || super
      end
    end

    def after_sign_out_path_for(resource)
      if resource.to_s.eql?("admin_user")
        new_admin_user_session_path
      elsif resource.to_s.eql?("user")
        new_user_session_path
      end
    end

  private
    def storable_location?
      request.get? && is_navigational_format? && !devise_controller? && !request.xhr?
    end

    def store_user_location!
      user_type = request.path.match(/^\/admin/).present? ? :admin_user : :user
      store_location_for(user_type, request.fullpath)
    end

    def user_not_authorized
      flash[:alert] = "You are not authorized to perform this action."
      redirect_to(request.referrer || root_path)
    end
end
