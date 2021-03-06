Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'index#angular'

  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:show, :create] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end

  post 'upload-file', to: 'index#upload_file'
  post 'add-user', to: 'user#create'
  get 'list-users', to: 'user#list_users'

  get 'home', to: 'login#home'
  post 'login', to: 'login#login'
  get 'logout', to: 'login#logout'
  get 'is_authenticated', to: 'login#is_authenticated'

end
