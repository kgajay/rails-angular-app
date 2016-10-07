# Be sure to restart your server when you modify this file.

Rails.application.config.session_store :redis_store , :key=> "_app-session", :servers => {
    :namespace =>  APP_CONFIG['redis_session_namespace'],
    :host => APP_CONFIG['redis_host'],
    :port =>  APP_CONFIG['redis_port']
}, :expires_in => APP_CONFIG['session_expiry']