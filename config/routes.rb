# frozen_string_literal: true

require "sidekiq/web"
Rails.application.routes.draw do
  devise_for :admin_users, path: "admin", path_names: {
    sign_in: "login",
    sign_out: "logout"
  }

  namespace :admin do
    root "dashboard#index"
    resources :posts, param: :slug
    resources :creator_profiles, param: :slug
  end
  root "home#index"
  get "about-us", to: "pages#about", as: "about"
  devise_for :users, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout",
    sign_up: "signup",
  }

  mount Sidekiq::Web => "/sidekiq"
  resources :projects, param: :slug
  resources :posts, param: :slug, only: [:index, :show]
  resources :profiles, param: :slug, only: [:show]
  namespace :dashboard do
    root "home#index"
    resources :projects, param: :slug
  end
  resources :backings
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
