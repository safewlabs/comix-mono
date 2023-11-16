# frozen_string_literal: true

class AddStatusToGenre < ActiveRecord::Migration[7.0]
  def change
    add_column :genres, :status, :integer, default: 0
  end
end
