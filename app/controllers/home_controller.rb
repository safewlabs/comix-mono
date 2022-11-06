# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    if Flipper.enabled?(:campaign, current_user)
      @products = Product.last(4)
      @posts = Post.published.last(3)
    else
      @posts = Post.published.last(3)
    end
  end
end
