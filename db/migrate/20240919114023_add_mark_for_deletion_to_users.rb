# frozen_string_literal: true

class AddMarkForDeletionToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :mark_for_deletion, :boolean
  end
end
