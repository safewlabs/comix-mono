# frozen_string_literal: true

class CreateProjectsCreatorProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :projects_creator_profiles do |t|
      t.references :project, null: false, foreign_key: true
      t.references :creator_profile, null: false, foreign_key: true

      t.timestamps
    end
  end
end
