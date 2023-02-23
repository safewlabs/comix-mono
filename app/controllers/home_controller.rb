# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @products = Product.last(4)
    @posts = Post.published.last(3)
    set_meta_tags title: "Home",
      description: "Comix home",
      keywords: 'Comics, Indie comics'
  end
end
