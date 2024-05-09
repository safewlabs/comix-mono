# frozen_string_literal: true

class AddCartIdToOrder < ActiveRecord::Migration[7.0]
  def change
    add_reference :orders, :cart, null: false, foreign_key: true
  end
end
