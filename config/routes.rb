# frozen_string_literal: true

require "sidekiq/web"
Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  get "/graphql", to: "graphql#execute"
  post "/graphql", to: "graphql#execute"

  devise_for :admin_users, path: "admin", path_names: {
    sign_in: "login",
    sign_out: "logout"
  }
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
  get "comics/:grenre_slug", to: "products#genres", as: "genres"
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
  resources :cart, only: [:index]

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

  direct :cdn_image do |model, options|
    expires_in = options.delete(:expires_in) { ActiveStorage.urls_expire_in }

    if model.respond_to?(:signed_id)
      route_for(
        :rails_service_blob_proxy,
        model.signed_id(expires_in:),
        model.filename,
        options.merge(host: ENV["CDN_HOST"])
      )
    else
      signed_blob_id = model.blob.signed_id(expires_in:)
      variation_key  = model.variation.key
      filename       = model.blob.filename

      route_for(
        :rails_blob_representation_proxy,
        signed_blob_id,
        variation_key,
        filename,
        options.merge(host: ENV["CDN_HOST"])
      )
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
