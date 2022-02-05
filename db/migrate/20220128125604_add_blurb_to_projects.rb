# frozen_string_literal: true

class AddBlurbToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :blurb, :text
  end
end
