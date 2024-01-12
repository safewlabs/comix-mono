# frozen_string_literal: true

class AddAuthorIdToPosts < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :author, null: true, foreign_key: true
  end
end
