# frozen_string_literal: true

class BackingsController < ApplicationController
  before_action :set_project

  def new
  end

  def create
  end

  def destroy
  end

  private
    def set_project
      @project = Project.find_by(slug: params[:slug])
    end
end
