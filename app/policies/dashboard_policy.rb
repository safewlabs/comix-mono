class DashboardPolicy < Struct.new(:user, :dashboard)
  def index?
    user.has_role? :creator
  end
end