class Api::SandboxController < ApplicationController
  def ping
    render json: '"PONG"'
  end

  def notfound
    render :status => :not_found, json: '"NotFound"'
  end

  def badrequest
    render :status => :bad_request, json: '"BadRequest"'
  end
end
