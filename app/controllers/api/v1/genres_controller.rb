# frozen_string_literal: true

class Api::V1::GenresController < ApplicationController
  def index
    @genres = Genre.published.includes([:cover_attachment])
  end

  def show
    @genre = Genre.includes([:cover_attachment]).find_by(slug: params[:slug])
    @pagy, @products = pagy(@genre.products.includes([:issue_cover_attachment, :store]).published)
    @pagination = pagy_metadata(@pagy)
  end
end
