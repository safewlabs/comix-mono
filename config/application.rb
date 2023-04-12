# frozen_string_literal: true

require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Comix
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    if ENV["PIPELINE_ENV"].present?
      puts "#######{ENV["PIPELINE_ENV"]}*****"
      Rails.application.config.credentials.content_path = Rails.root.join("config/credentials/#{ENV["PIPELINE_ENV"]}.yml.enc")
    end
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    Rails::Html::WhiteListSanitizer.allowed_tags << "iframe"
    Rails.application.config.assets.paths << Rails.root.join("app", "assets", "fonts")
  end
end
