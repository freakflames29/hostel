class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user, :isAdmin?

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

  def logged_in?
    !!current_user
  end

  def require_user
    unless logged_in?
      flash[:fail] = "Login to perform this step !"
      redirect_to login_path
    end
  end

  def checkpoints
    if logged_in?
      flash[:ok] = "You are already logged in"
      redirect_to user_path(session[:id])
    end
  end

  def isAdmin?
    if @current_user.owner.eql?(1)
      true
    else

      false
    end
  end

  def redirect_if_not_admin
    unless @current_user.owner.eql?(1)
      flash[:fail] = "You cant perform this action"
      redirect_to hostels_path
    end
  end

end
  