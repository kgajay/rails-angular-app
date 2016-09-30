class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  def format_response(result)
    respond_to do |format|
      format.json {render :json=> ERB::Util.json_escape(result.to_json)}
      format.html {render :text=> ERB::Util.json_escape(result.to_json).to_s}
    end
  end

end
