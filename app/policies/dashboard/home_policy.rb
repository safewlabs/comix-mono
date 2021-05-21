class Dashboard::HomePolicy < Struct.new(:user, :dashboards)
  def index?
    user.has_role? :creator
  end
end
  