# frozen_string_literal: true

class AddUserToOrder < ActiveRecord::Migration[7.0]
  def change
    add_reference :orders, :user, null: false, foreign_key: true
  end
end
