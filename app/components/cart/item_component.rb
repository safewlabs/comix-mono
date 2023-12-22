# frozen_string_literal: true

class Cart::ItemComponent < ViewComponent::Base
  def initialize(line_item:)
    @line_item = line_item
  end

end
