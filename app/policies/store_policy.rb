class StorePolicy < ApplicationPolicy
  attr_reader :current_user, :model
  
  def initialize(current_user, model)
    @current_user = current_user
    @user = model
  end
   
  def index?
    current_user.has_role? :creator
  end
  
  def new?
    current_user.has_role? :creator
  end
end