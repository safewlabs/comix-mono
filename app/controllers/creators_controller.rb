class CreatorsController < ApplicationController
  def index
    @creators = Creator.all
  end
end
