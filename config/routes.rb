Rails.application.routes.draw do
  resources :users, except: [:new]
  get 'signup', to: "users#new"
  root "homes#index"

  get 'login', to: "sessions#new"
  post 'login', to: "sessions#create"

  delete "logout", to: "sessions#destroy"

  resources :hostels, except: [:new]
  get 'upload', to: "hostels#new"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
