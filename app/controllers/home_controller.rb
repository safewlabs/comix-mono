# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @pagy, @records = pagy(Post.order(created_at: :desc))
  end
end
