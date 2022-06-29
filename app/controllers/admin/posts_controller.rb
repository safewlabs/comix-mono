# frozen_string_literal: true

class Admin::PostsController < AdminController
  before_action :set_post

  def index
    @posts = Post.all
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def delete
  end

  private
    def set_post
      @post = Post.find_by(slug: params[:slug])
    end
end
