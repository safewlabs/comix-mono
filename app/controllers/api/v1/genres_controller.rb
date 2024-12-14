# frozen_string_literal: true

class Api::V1::GenresController < ApplicationController
  def index
    @genres = Genre.published
  end
end
