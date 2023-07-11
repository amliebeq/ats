Rails.application.routes.draw do
  resources :jobs, only: [:create, :update, :destroy, :index]
  resources :lists, only: [:create, :update, :destroy, :index]
  resources :notes, only: [:create, :update, :destroy]
  resources :applicants, only: [:create, :update, :destroy, :index]
  resources :users, only: [:index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
