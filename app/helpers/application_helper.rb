# frozen_string_literal: true

module ApplicationHelper
  def stripe_url
    "https://connect.stripe.com/oauth/authorize?response_type=code&client_id=#{stripe_client_id}&scope=read_write"
  end

  def stripe_connect_button # add this method
    link_to stripe_url, class: "btn-stripe-connect" do
      content_tag :span, "Connect with Stripe"
    end
  end

  protected
    def stripe_client_id
      Rails.application.credentials.dig(:stripe, :connect_client_id)
    end
end
