# frozen_string_literal: true

class Dashboard::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :delete]

  def index
  end

  def new
  end

  def edit
  end

  def update
    @project.update!(project_params)
    redirect_to dashboard_projects_path
  end

  private
    def project_params
      params.require(:project).permit(:title, :blurb, :description, :issue_cover, :funding_goal, :video_url)
    end

    def set_project
      @project = Project.find_by(slug: params[:slug])
    end
end
