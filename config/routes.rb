Rails.application.routes.draw do  
  root 'home#index'
  get 'search', to: 'search#index', as: 'search'
  
  get 'dashboard', to: 'dashboards#index', as: 'dashboard'
  
  resources :stores, param: :slug
  resources :genres, param: :slug
  resources :products, param: :slug
  resources :creators, param: :slug
  resources :categories, param: :slug
  
  # pages
  get 'about', to: 'pages#about', as: 'about'
  get 'sell-on-comix', to: 'pages#sell_on_comix', as: 'sell-on-comix'

  # user management
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  if Rails.env.development?
    require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
  end

  devise_scope :user do
    get 'creator-signup', to: 'users/registrations#creator'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end