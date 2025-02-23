# frozen_string_literal: true

class Api::V1::StoresController < ApplicationController
  def random
    @stores = Store.includes([:display_image_attachment]).order("RANDOM()").take(8)
  end

  def index
    @pagy, @stores = pagy(Store.includes([:display_image_attachment]).all)
    @pagination = pagy_metadata(@pagy)
  end

  def show
    @store = Store.includes([:display_image_attachment, :cover_image_attachment, :products])
                            .find_by(slug: params[:slug])
    @products = @store.products.includes([:issue_cover_attachment])
  end
end
