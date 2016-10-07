class UserController < ApplicationController

  def list_users
    format_response(User.all)
  end

  def create
    Rails.logger.debug "params: #{params}"
    format_response(User.create(post_params))
  end

  private
  def post_params
    params.require(:user).permit(:name, :email, :password)
  end

end