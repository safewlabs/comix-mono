# frozen_string_literal: true

Sidekiq.strict_args!
if ENV["PIPELINE_ENV"].eql?("production")
  Sidekiq.configure_server do |config|
    config.redis = { url: ENV["SIDEKIQ_REDIS_URL"],
                     ssl_params: { verify_mode: OpenSSL::SSL::VERIFY_NONE } }
  end

  Sidekiq.configure_client do |config|
    config.redis = { url: ENV["SIDEKIQ_REDIS_URL"],
                     ssl_params: { verify_mode: OpenSSL::SSL::VERIFY_NONE } }
  end
end
