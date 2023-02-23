# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    @pagy, @posts = pagy(Post.published.order(created_at: :desc))
  end

  def show
    @post = Post.find_by(slug: params[:slug])

    set_meta_tags title: @post.title,
              description: @post.body,
              keywords: "Comics, Indie comics"
  end
end
