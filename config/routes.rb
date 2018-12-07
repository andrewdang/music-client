Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth',
        controllers: {
          sessions: 'api/v1/devise_token_auth/sessions'
        }
      resources :song_versions
      resources :users, only: [:index, :show]
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
