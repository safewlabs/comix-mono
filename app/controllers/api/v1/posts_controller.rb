# frozen_string_literal: true

class Api::V1::PostsController < ApplicationController
  def latest
    @posts = Post.published.last(6)
  end

  def index
    @pagy, @posts = pagy(Post.all)
    @pagination = pagy_metadata(@pagy)
  end

  def show
    @post = Post.find_by(slug: params[:slug])
  end
end
