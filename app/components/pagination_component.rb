# frozen_string_literal: true

class PaginationComponent < ApplicationComponent
  include Pagy::Frontend

  def initialize(pagy:)
    @pagy = pagy
  end

end
