Rails.application.routes.draw do  
  get 'orders/index'
  get 'orders/show'
  get 'orders/new'
  get 'carts/show'
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

  get 'carts/:id' => "carts#show", as: "cart"
  delete 'carts/:id' => "carts#destroy"

  post 'line_items/:id/add', to: "line_items#add_quantity", as: "line_item_add"
  post 'line_items/:id/reduce', to: "line_items#reduce_quantity", as: "line_item_reduce"
  post 'line_items', to: "line_items#create"
  get 'line_items/:id', to: "line_items#show", as: "line_item"
  delete 'line_items/:id', to: "line_items#destroy"

  resources :orders

  devise_scope :user do
    get 'creator-signup', to: 'users/registrations#creator'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end