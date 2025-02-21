# frozen_string_literal: true

class Api::V1::GenresController < ApplicationController
  def index
    @genres = Genre.published
  end

  def show
    @genre = Genre.find_by(slug: params[:slug])
    @pagy, @products = pagy(@genre.products.includes([:issue_cover_attachment, :store]).published)
    @pagination = pagy_metadata(@pagy)
  end
end
