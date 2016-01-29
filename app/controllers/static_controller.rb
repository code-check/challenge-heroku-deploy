class StaticController <ApplicationController
  def index
    render template: "static/index"
  end

  def show
    render template: "static/#{params[:page]}"
  end
end
