# frozen_string_literal: true
# encoding: utf-8

module ApplicationHelper
  include Pagy::Frontend
  def stripe_url
    "https://connect.stripe.com/oauth/authorize?response_type=code&client_id=#{stripe_client_id}&scope=read_write"
  end

  def stripe_connect_button # add this method
    link_to stripe_url, class: "btn-stripe-connect" do
      content_tag :span, "Connect with Stripe"
    end
  end

  def default_meta_tags
    {
      site: 'comix.one',
      title: 'Comix',
      reverse: true,
      separator: '|',
      description: 'Discover Indie comics, Crowdfund and Buy',
      keywords: 'indie comics, marketplace, crowdfunding',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        { href: image_url('favicon.ico') },
        { href: image_url('icon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'comix.one',
        title: 'Comix',
        description: 'The most popular movie website in the world', 
        type: 'website',
        url: request.original_url,
        image: image_url('login-page.png')
      }
    }
  end

  protected
    def stripe_client_id
      Rails.application.credentials.dig(:stripe, :connect_client_id)
    end
end
