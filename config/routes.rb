Rails.application.routes.draw do
  resources :todos do
    member do
      put :toggle
    end
  end

  root 'todos#index'
end
