Rails.application.routes.draw do
  resources :to_dos, only: [:create, :update, :destroy]
  resources :jobs, only: [:create, :update, :destroy]
  resources :lists, only: [:create, :update, :destroy]
  resources :notes, only: [:create, :update, :destroy]
  resources :applicants, only: [:create, :update, :destroy]
  resources :resumes, only: [:create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/add_applicant_to_list", to: "lists#addApplicantToList"
  patch "/remove_applicant_from_list", to: "lists#removeApplicantFromList"
  patch "/add_applicant_to_job", to: "jobs#addApplicantToJob"
  patch "/remove_applicant_from_job", to: "jobs#removeApplicantFromJob"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
