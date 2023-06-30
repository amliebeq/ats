Rails.application.routes.draw do
  resources :jobs
  resources :lists
  resources :users
  resources :notes
  resources :applicants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
