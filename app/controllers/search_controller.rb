# frozen_string_literal: true

class SearchController < ApplicationController
  def results
    if params.dig(:search_term).present?
      @products = Product.search_comics(params[:search_term])
    else
      @products = []
    end

    respond_to do |format|
      format.turbo_stream
    end
  end
end
