# frozen_string_literal: true

class CreateProjectsCreators < ActiveRecord::Migration[7.0]
  def change
    create_table :projects_creators do |t|
      t.references :project, null: false, foreign_key: true
      t.references :creator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
