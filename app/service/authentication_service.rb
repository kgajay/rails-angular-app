class AuthenticationService
  class <<self
    def authenticate_user_for_session(session)
      Rails.logger.debug "Session Expiry = #{session[:expires_at]}, now = #{Time.now}"
      session.has_key?(:id) && session[:expires_at]!=nil &&  session[:expires_at] > Time.now
    end
  end
end
