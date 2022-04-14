# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root 'pages#index'

  resources :posts
end
