# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @posts = Post.last(3)
  end
end
