# frozen_string_literal: true

class StripeConnectButtonComponent < ViewComponent::Base
  def stripe_button_link
    stripe_url = "https://connect.stripe.com/express/oauth/authorize"
    client_id = Rails.application.credentials.dig(:stripe, :connect_client_id)
    "#{stripe_url}??response_type=code&client_id=#{client_id}"
  end
end
