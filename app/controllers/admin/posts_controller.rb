# frozen_string_literal: true

class Admin::PostsController < AdminController
  before_action :set_post, only: [:edit, :update]

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
    @post.update(post_params)
    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: "Post was successfully updated." }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def delete
  end

  private
    def set_post
      @post = Post.find_by(slug: params[:slug])
    end

    def post_params
      params.require(:post).permit(:title, :summary, :youtube_video_id, :body)
    end
end
