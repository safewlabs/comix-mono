# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protected
    def after_sign_in_path_for(resource)
      stored_location_for(resource) || super
    end

    def after_sign_out_path_for(resource)
      if resource.to_s.eql?("admin_user")
        new_admin_user_session_path
      elsif resource.to_s.eql?("user")
        new_user_session_path
      end
    end
end
