class Api::V1::DeviseTokenAuth::SessionsController < ::DeviseTokenAuth::SessionsController
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  before_action :authenticate_user!, except: [:new, :create, :validate_token]
  after_action :sign_in_active_admin_user

  # Prevent session parameter from being passed
  # Unpermitted parameter: session
  wrap_parameters format: []

  private

  def sign_in_active_admin_user
    warden.set_user(current_user)
  end
end
