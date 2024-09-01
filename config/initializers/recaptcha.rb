Recaptcha.configure do |config|
  config.site_key =  Rails.application.credentials.dig(:site_key)
  config.secret_key = Rails.application.credentials.dig(:secret_key)
end