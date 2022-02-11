# frozen_string_literal: true

Rails.application.routes.draw do
  root "home#index"
  get "about", to: "pages#about", as: "about"
  devise_for :users, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout",
    sign_up: "signup"
  }
  resources :projects, param: :slug
  namespace :dashboard do
    resources :projects, param: :slug
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
