class LoginController < ApplicationController


  SESSION_EXPIRY_SECONDS = APP_CONFIG['session_expiry']

  def home
    format_response({:message => "login"})
  end

  def login
    Rails.logger.debug "params in login : #{params}"

    session[:id] = "store as you want"
    session[:expires_at] = Time.now + SESSION_EXPIRY_SECONDS

    format_response({:message => "login"})
  end


  def logout
    Rails.logger.debug "params in login : #{session}"

    # csrf_token = session[]
    session[:id] = nil
    # reset_session
    format_response ({ :message => "logout" })
  end

  def is_authenticated
    Rails.logger.debug "session: #{is_valid_session}"
    if !is_valid_session
      format_response_base({:message => "in valid session" }, 401)
    else
      format_response_base({:message => "valid session" }, 200)
    end
  end

end