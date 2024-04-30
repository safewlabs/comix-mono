## <img src="app/assets/images/logo.png" alt="Comix Logo" width="50" /> Comix

[![CI](https://github.com/safewlabs/comix-mono/actions/workflows/ci.yml/badge.svg?branch=trunk)](https://github.com/safewlabs/comix-mono/actions/workflows/ci.yml)

- [Comix](#comix------)
  * [Stack](#stack)
  * [Setup](#setup)
    + [Prerequisites](#prerequisites)
      - [M1 notes](#m1-notes)
    + [Secrets](#secrets)
      - [Adding a new secret](#adding-a-new-secret)
    + [Install steps](#install-steps)
    + [Testing](#testing)
    + [Linting](#linting)
    + [Pre-Commit hook](#pre-commit-hook)

## Stack

- Ruby
- Rails 7
- ESbuild
- PostgreSQL
- Redis
- Tailwind
- Hotwired
- Railway ( hosting the app )
- Sidekiq
- Digitalocean spaces

## Wiki

Please head over [here](https://www.notion.so/Engineering-Wiki-fa21ba7fd9224a57bbbbb0d2ff64411a?pvs=4) for more engineering related information.

## Setup

### Prerequisites

In order to get the local environment up and running on your machine, you would require the following to be installed :

- Ruby 3.1.1. It is recommended to use a version manager like [rbenv](https://github.com/rbenv/rbenv) or [rvm](https://rvm.io/) in order to manage your rubies.
- PostgreSQL
- Redis
- Vips - `brew install vips`

#### M1 notes
If installing ruby on M1 architecture, you may have some issues when compiling the Ruby binaries. Try installing it through rbenv using this command:

```
RUBY_CFLAGS="-Wno-error=implicit-function-declaration"  arch -x86_64 rbenv install 3.0.2
```

### Secrets

We manage api keys and secrets via [Rails credentails](https://edgeguides.rubyonrails.org/security.html#environmental-security). This means credentials are all committed to repo via a credentials file. Our setup is the following -

- Global credentails file - config/credentials.yml.emc. You need a `config/master.key` in order to decrypt the secrets run your development server.

#### Adding a new secret

For adding a secret to development and test

```
$ EDITOR="vim" bin/rails credentials:edit
```

For Staging and production

```
$ EDITOR="vim" bin/rails credentials:edit --environment staging
```

To view the existing credentials you could do something like -

```
$ bin/rails credentials:show
$ bin/rails credentials:show --environment staging
```

### Install steps

Once the repo is cloned, you need to run the following commands to install all the dependencies and create the database.

```
$ bundle install
$ yarn install
$ rails db:create db:migrate
$ rails db:seed
```

The easiest way to start the server is to install the foreman gem and run the server using your procfile.

```
$ gem install foreman
$ foreman start -f Procfile.dev
```

Now navigate to [localhost:3000](localhost:3000) to see the home page of the app. Sidekiq is available at [localhost:3000/admin/sidekiq](localhost:3000/admin/sidekiq)

### Testing

We use [rspec](https://rspec.info/) for testing. In order to run your test suite locally simply run from your app directory -

```
$ bundle exec rspec
```

### Linting

For linting our ruby code, we use rubocop. It is recommended to run an autocorrect to keep your
code clean and conform with the rubocop rules. You can do so by -

```
$ bundle exec rubocop -A
```

### Error logging & Monitoring

We use [Honeybadger](https://honeybadger.io) to log production errors and manage uptime.

### Pre-Commit hook

We use [overcommit](https://nicedoc.io/sds/overcommit) to run our pre-commit hooks. Install this by -

```
$ gem install overcommit

# Inside project's root directory
$ overcommit --install
```

You're all set 🙌 !!

### API Doc

Mutations

`userLogin` mutation is used for logging into the a user's account. In order to make subsequent requests, you would need `accessToken`, `client` and `uid`. So make sure you extract that for the next one.

```
mutation UserLogin {
    userLogin(email: "lyman@breitenberg-jacobson.biz", password: "password") {
        authenticatable {
            confirmationSentAt
            confirmedAt
            createdAt
            currentSignInAt
            currentSignInIp
            email
            firstName
            id
            lastName
            lastSignInAt
            lastSignInIp
            purchasesCount
            rememberCreatedAt
            signInCount
            unconfirmedEmail
            updatedAt
        }
        credentials {
            accessToken
            client
            expiry
            tokenType
            uid
        }
    }
}
```

Logout

```
mutation UserLogout {
    userLogout {
        authenticatable {
            confirmationSentAt
            confirmedAt
            createdAt
            currentSignInAt
            currentSignInIp
            email
            firstName
            id
            lastName
            lastSignInAt
            lastSignInIp
            purchasesCount
            rememberCreatedAt
            signInCount
            unconfirmedEmail
            updatedAt
        }
    }
}
```

Queries

For all the queries, you would need to pass the headers you've received from the `userLogin` mutation, somewhat like below :

```
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    headers: {
      "access-token": asyncStorage.getItem('access-token'),
      "client": asyncStorage.getItem('client'),
      "uid": asyncStorage.getItem('uid')
    },
  }),
});
```

```
query Purchases {
    purchases(userId: "65") {
        id
        product {
            ageRating
            createdAt
            description
            fileAttachment
            id
            issueCover
            name
            pageCount
            price
            releaseDate
            slug
            updatedAt
            collaborations {
                creatorProfile {
                    name
                    formattedBio
                    skills
                    avatar
                }
            }
            store {
                displayImage
                id
                name
            }
            updatedAt
        }
    }
}

```
