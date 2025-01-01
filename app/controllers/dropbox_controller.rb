# frozen_string_literal: true

class DropboxController < ApplicationController
  # Example call:
  # GET /dropbox/auth
  def auth
    url = authenticator.auth_code.authorize_url(redirect_uri: redirect_uri)
    redirect_to url, allow_other_host: true
  end

  # Example call:
  # GET /dropbox/auth_callback?code=VofXAX8DO1sAAAAAAAACUKBwkDZyMg1zKT0f_FNONeA
  def auth_callback
    auth_bearer = authenticator.auth_code.get_token(params[:code],
                                          redirect_uri: redirect_uri)
    token = auth_bearer.token # This line is step 5 in the diagram.

    # At this stage you may want to persist the reusable token we've acquired.
    # Remember that it's bound to the Dropbox account of your user.

    # If you persist this token, you can use it in subsequent requests or
    # background jobs to perform calls to Dropbox API such as the following.
    UploadFilesFromDropboxJob.perform_async(token)

    redirect_to dashboard_bulk_upload_path
  end

  private
    def authenticator
      client_id = Rails.application.credentials.dig(:dropbox, :client_id)
      client_secret = Rails.application.credentials.dig(:dropbox, :client_secret)
      DropboxApi::Authenticator.new(client_id, client_secret)
    end

    def redirect_uri
      dropbox_auth_callback_url # => http://localhost:3000/dropbox/auth_callback
    end
end
