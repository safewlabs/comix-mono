## [Comix](https://comix.life) - A marketplace for independent comics

[![CI](https://github.com/safewlabs/comix-mono/actions/workflows/ci.yml/badge.svg?branch=trunk)](https://github.com/safewlabs/comix-mono/actions/workflows/ci.yml)

### Stack

* Ruby 3.0.1
* Rails 7
* PostgreSQL
* Hotwired
* Tailwind CSS
* RSpec, Capybara, FactoryBot, Faker
* Sidekiq & Redis

### Install instructions

Install all the pre-requisites and clone the repo. cd into the app directory.

```shell
$ bundle install
$ yarn install
$ rails db:create db:migrate db:seed
```

Then start the server -

```shell
$ foreman start -f Procfile.dev
```

### Testing

We use RSpec as our testing framework. Run the tests using the following command :

```
bundle exec rspec
```