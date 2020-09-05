Rails.application.routes.draw do  
  root 'home#index'
  get 'search', to: 'search#index', as: 'search'
  
  get 'dashboard', to: 'dashboards#index', as: 'dashboard'
  
  resources :stores, param: :slug
  resources :genres, param: :slug
  resources :products, param: :slug
  resources :creators, param: :slug
  
  # pages
  get 'about', to: 'pages#about', as: 'about'
  
  # user management
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  
  devise_scope :user do
    get 'sell-on-comix', to: 'users/registrations#creator'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
