# frozen_string_literal: true

class StoresController < ApplicationController
  def show
    @store = Store.find_by(slug: params[:slug])
  end
end
