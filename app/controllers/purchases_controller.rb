# frozen_string_literal: true

class PurchasesController < ApplicationController
  before_action :authenticate_user!
  def index
    @pagy, @purchases = pagy(current_user.purchases.order(created_at: :desc))
  end
end
