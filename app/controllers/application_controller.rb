class ApplicationController < ActionController::Base

  before_filter :prevent_cache

  protect_from_forgery with: :exception

  def is_valid_session
    AuthenticationService.authenticate_user_for_session(session)
  end

  def authenticate_session
    format_response_base({:message => "Your session has expired, Please login again"}, 401) unless is_valid_session
  end

  def format_response_base(result, status_code)
    respond_to do |format|
      format.json {render :json=> ERB::Util.json_escape(result.to_json), :status => status_code}
      format.html {redirect_to root_path}
    end
  end

  def format_response(result)
    respond_to do |format|
      format.json {render :json=> ERB::Util.json_escape(result.to_json)}
      format.html {render :text=> ERB::Util.json_escape(result.to_json).to_s}
    end
  end

  def prevent_cache
    response.headers["Pragma"] = "no-cache"
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Expires"] = "Fri, 01 Jan 1970 00:00:00 GMT"
  end

end
