class Dashboard::HomeController < Dashboard::BaseController
  def index
    authorize :dashboard, :index?
  end
end