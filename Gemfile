source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
gem 'devise', git: 'https://github.com/plataformatec/devise.git'
gem 'rolify'
gem 'pundit'
# Use Puma as the app server
gem 'puma', '~> 5.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 6.0', '>= 6.0.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '>= 5.1.1'
# gem 'therubyracer', platforms: :ruby
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 5.0', '>= 5.0.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.10'
# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.3'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'ransack'
gem 'sidekiq'
gem 'chartkick'
gem 'groupdate'

# Use ActiveStorage variant
gem 'image_processing'
gem 'mini_magick', '~> 4.11'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
gem 'rails_12factor', group: :production

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  gem 'dotenv-rails', '>= 2.7.5'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'factory_bot_rails', '>= 5.2.0'
  gem 'faker'
  gem 'guard-rspec', '~> 4.7'
  gem 'rspec-rails', '~> 5.0.1'
end

group :development do
  gem 'annotate'
  gem 'listen', '>= 3.0.5', '< 3.6'
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.0.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'railroady'
end

group :test do
  gem 'database_cleaner'
  gem 'rails-controller-testing', '>= 1.0.4'
  gem 'shoulda-matchers', '5.0.0'
  gem 'simplecov'
  gem 'codecov'
  gem 'webmock'
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.32.2', '< 4.0'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
