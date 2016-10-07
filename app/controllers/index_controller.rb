class IndexController < ApplicationController

  # protect_from_forgery :exception => [:upload_file]
  before_action :authenticate_session, except: :angular

  def angular
    render 'layouts/application'
  end

  def upload_file
    Rails.logger.debug "params: #{params}"
    #  TODO
    response = {"status": "ok"}
    format_response(response)
  end

end