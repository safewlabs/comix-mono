# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.1"

gem "rails", "~> 7.0.3"
gem "pg"
gem "puma", "~> 6.0"

gem "propshaft"
gem "terser"
gem "jsbundling-rails"
gem "cssbundling-rails"
gem "turbo-rails", "~> 1.5.0"
gem "stimulus-rails"
gem "view_component"

gem "jbuilder"
gem "aws-sdk-s3"

gem "redis", "~> 5.0"
gem "sidekiq"
gem "invisible_captcha"

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
gem "chartkick"
gem "groupdate"
gem "httparty"
gem "dotenv-rails"
gem "honeybadger"
gem "rack-cors"
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", "~> 1.2"

group :development, :test do
  gem "annotate", github: "dabit/annotate_models", branch: "rails-7"
  gem "factory_bot_rails"
  gem "faker", git: "https://github.com/faker-ruby/faker.git", branch: "main"
  gem "rspec-rails", "~> 6.1.0"
  gem "rubocop-rails", require: false
  gem "rubocop-rails_config"
  gem "rubocop-rspec", require: false
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]
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
end
