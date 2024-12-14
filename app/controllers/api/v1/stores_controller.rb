# frozen_string_literal: true

class Api::V1::StoresController < ApplicationController
  def random
    @stores = Store.order("RANDOM()").take(8)
  end
end
