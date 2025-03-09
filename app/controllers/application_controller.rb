# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # Enables Superglue rendering defaults for sensible view directories.
  #
  # without `use_jsx_rendering_defaults`:
  #
  # ```
  # app/views/posts/
  #  - index.jsx
  #  - index.json.props
  #  - index.html.erb
  # ```
  #
  # with `use_jsx_rendering_defaults`:
  #
  # ```
  # app/views/posts/
  #   - index.jsx
  #   - index.json.props
  # ```
  #
  # before_action :use_jsx_rendering_defaults
  #
  #
  # The html template used when `use_jsx_rendering_defaults` is enabled.
  # Defaults to "application/superglue".
  #
  # superglue_template "application/superglue"

  include Pagy::Backend
  helper_method :current_user
  helper_method :current_admin_user
  before_action :set_current_cart

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

    def set_current_cart
      cart_id = session[:cart_id] || params[:id]
      @current_cart ||= Cart.find_by(id: cart_id)

      if @current_cart.nil?
        @current_cart = Cart.create
        session[:cart_id] = @current_cart.id
      end
    end
end
