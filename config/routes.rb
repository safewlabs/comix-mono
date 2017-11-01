Rails.application.routes.draw do
  root to: 'home#index'

  devise_for :members, controllers: {
    registrations: 'members/registrations',
    sessions: 'members/sessions'    
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
