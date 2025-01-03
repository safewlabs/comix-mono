# frozen_string_literal: true

class Api::V1::StoresController < ApplicationController
  def random
    @stores = Store.order("RANDOM()").take(8)
  end

  def index
    @pagy, @stores = pagy(Store.all)
    @pagination = pagy_metadata(@pagy)
  end
end
