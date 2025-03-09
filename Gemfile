# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.3.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.2.2"

gem "jsbundling-rails"
gem "cssbundling-rails"
# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "propshaft"
gem "rack-brotli"
# Use postgres as the database for Active Record
gem "pg"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 6.0"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails", "~> 2.0.4"
# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Use Tailwind CSS [https://github.com/rails/tailwindcss-rails]
gem "view_component"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"
gem "aws-sdk-s3"
gem "airrecord"
# Use Redis adapter to run Action Cable in production
gem "redis", "~> 5.3"
gem "sidekiq"
gem "invisible_captcha"
gem "dropbox_api"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"
gem "money-rails"
gem "stripe"
gem "omniauth", "~> 2.1"
# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"
gem "devise"
gem "rolify"
gem "pundit"
gem "graphql"
gem "graphql_devise"
gem "pagy"
gem "flipper"
gem "flipper-active_record"
gem "flipper-ui"
gem "meta-tags"
gem "pg_search"
gem "httparty"
gem "dotenv-rails"
gem "honeybadger"
gem "rack-cors"
gem "motor-admin"
gem "superglue"
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false
# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", "~> 1.2"

group :development, :test do
  gem "annotate", github: "dabit/annotate_models", branch: "rails-7"
  gem "factory_bot_rails"
  gem "faker", github: "faker-ruby/faker", branch: :main
  gem "rspec-rails", "~> 7.1.0"
  gem "rubocop-rails", require: false
  gem "rubocop-rails_config"
  gem "rubocop-rspec", require: false
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]
  gem "bullet"
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
  gem "graphiql-rails"
  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem "shoulda-matchers", "~> 6.0"
end
