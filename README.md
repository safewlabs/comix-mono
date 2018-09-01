## [Comix](https://comix.life)

[![Maintainability](https://api.codeclimate.com/v1/badges/1482d87626eec74e1697/maintainability)](https://codeclimate.com/github/safewlabs/comix-mono/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1482d87626eec74e1697/test_coverage)](https://codeclimate.com/github/safewlabs/comix-mono/test_coverage)
[ ![Codeship Status for safewlabs/comix-mono](https://app.codeship.com/projects/1b9be7e0-a50e-0135-16d4-669675cbf703/status?branch=new-app)](https://app.codeship.com/projects/255140)

### Pre-requisites

* Ruby 2.5.1
* Rails 5.2.1
* PostgreSQL
* Stimulus JS
* RSpec
* Capybara
* FactoryBot
* Faker

### Install instructions

Install all the pre-requisites and clone the repo. cd into the app directory.

```shell
$ bundle install
$ yarn install
$ rails db:create db:migrate db:seed
```

Start the server.

```shell
$ rails s
```

### Testing

We use RSpec as our testing framework. Run the tests using the following command :

```
bundle exec rspec
```