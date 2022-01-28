# frozen_string_literal: true

class ProjectsController < ApplicationController
  before_action :set_project

  def show
  end

  private
    def set_project
      @project = Project.find_by(slug: params[:slug])
    end
end
