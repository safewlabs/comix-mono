Rails.application.routes.draw do
  get 'about-us', to: 'pages#about', as: 'about_us'

  root to: 'home#index'

  devise_for :members, controllers: {
    registrations: 'members/registrations',
    sessions: 'members/sessions'    
  }

  devise_scope :member do
    get 'sell-on-comix', to: 'members/registrations#seller'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end