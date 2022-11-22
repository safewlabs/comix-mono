# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @products = Product.last(4)
    @posts = Post.published.last(3)
  end
end
