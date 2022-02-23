# frozen_string_literal: true

class AddFieldsToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :video_url, :string
    add_column :projects, :funds_raised, :decimal
    change_column :projects, :funding_goal, :decimal, using: "funding_goal::numeric"
  end
end
