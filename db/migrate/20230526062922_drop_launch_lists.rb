# frozen_string_literal: true

class DropLaunchLists < ActiveRecord::Migration[7.0]
  def change
    drop_table :launch_lists
  end
end
