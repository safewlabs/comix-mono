# frozen_string_literal: true

class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def stripe_connect
    auth_data = request.env["omniauth.auth"]
    @user = current_user
    if @user.persisted?
      @user.update(
          provider: auth_data.provider,
          uid: auth_data.uid,
          access_code: auth_data.credentials.token,
          publishable_key: auth_data.info.stripe_publishable_key
        )

      sign_in_and_redirect @user, event: :authentication
      flash[:notice] = "Stripe Account Created And Connected" if is_navigational_format?
    else
      session["devise.stripe_connect_data"] = request.env["omniauth.auth"]
      redirect_to root_path
    end
  end

  def failure
    redirect_to root_path
  end
end
