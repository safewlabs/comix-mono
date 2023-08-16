# frozen_string_literal: true

require "sidekiq/web"
Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  devise_for :admin_users, path: "admin", path_names: {
    sign_in: "login",
    sign_out: "logout"
  }

  mount_graphql_devise_for(
    User,
    at: "api/v1",
    skip: [:register]
  )

  namespace :admin do
    root "dashboard#index"
    resources :posts, param: :slug
    resources :creator_profiles, param: :slug
    resources :stores, param: :slug
    resources :products, param: :slug do
      get :add_product_to_stripe, on: :member
    end
    mount Flipper::UI.app(Flipper) => "/flipper"
    mount Sidekiq::Web => "/sidekiq"
  end
  root "home#index"
  get "about", to: "pages#about", as: "about"
  get "for-creators", to: "pages#for_creators", as: "for_creators"
  get "comics", to: "products#index", as: "comics"
  devise_for :users, controllers: { registrations: "users/registrations" }, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout",
    sign_up: "signup",
  }

  resources :search do
    collection do
      post :results
    end
  end
  resources :projects, param: :slug
  resources :posts, param: :slug, only: [:index, :show]
  resources :profiles, param: :slug, only: [:show]
  resources :stores, param: :slug, only: [:show]
  resources :products, param: :slug, only: [:show]
  resources :stores, param: :slug, only: [:show]

  get "stores/show"
  get "stripe/connect", to: "stripe#connect", as: :stripe_connect
  get "stripe/dashboard/:user_id", to: "stripe#dashboard", as: :stripe_dashboard

  namespace :payments do
    get "stripe/checkout", to: "stripe#checkout", as: :stripe_checkout
    get "stripe/success", to: "stripe#success", as: :stripe_success
    get "stripe/cancel", to: "stripe#cancel", as: :stripe_cancel
  end

  namespace :dashboard do
    root "home#index"
    resources :profiles, param: :slug
    resources :projects, param: :slug
    resources :stores, param: :slug
    resources :products, param: :slug do
      get :add_products_to_stripe, on: :collection
    end
    resources :payments, param: :slug
  end
  resources :backings
  resources :purchases, only: [:index, :show], param: :slug
  resources :webhooks, only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
