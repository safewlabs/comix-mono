# frozen_string_literal: true

class Dashboard::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :delete]

  def index
  end

  def new
    @project = Project.new
    @project.bundles.build
  end

  def edit
  end

  def create
    @project = Project.new(project_params)
    @project.owner = current_user
    respond_to do |format|
      if @project.save
        if @project.bundles.any? && current_user.can_receive_payments?
          CreateBundlePlansJob.perform_later(@project) # you can also perform later if you like
        end
        # ExpireProjectJob.set(wait_until: @project.expires_at).perform_later(@project)
        format.html { redirect_to @project, notice: "Project was successfully created." }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @project.update!(project_params)
    redirect_to dashboard_projects_path
  end

  private
    def project_params
      params.require(:project).permit(:title,
                                      :blurb,
                                      :description,
                                      :issue_cover,
                                      :funding_goal,
                                      :video_url,
                                      :campaign_ends_at,
                                      bundles_attributes: [
                                        :title,
                                        :description,
                                        :pledge_amount,
                                        :project_id
                                      ])
    end

    def set_project
      @project = Project.find_by(slug: params[:slug])
    end
end
