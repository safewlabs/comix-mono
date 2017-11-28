Rails.application.routes.draw do

  resources :products
  get 'dashboard', to: 'dashboard#index', as: 'dashboard'

  get 'about-us', to: 'pages#about', as: 'about_us'
  get 'terms-of-use', to: 'pages#terms_of_use', as: 'terms_of_use'
  get 'privacy-policy', to: 'pages#privacy_policy', as: 'privacy_policy'

  root to: 'home#index'

  devise_for :members, controllers: {
    registrations: 'members/registrations',
    sessions: 'members/sessions',
    omniauth_callbacks: 'members/omniauth_callbacks'
  }
  
  devise_scope :member do
    get 'sell-on-comix', to: 'members/registrations#creator'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end