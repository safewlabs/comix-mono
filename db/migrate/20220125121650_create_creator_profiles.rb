# frozen_string_literal: true

class CreateCreatorProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :creator_profiles do |t|
      t.string :name
      t.text :bio
      t.string :slug, null: false

      t.timestamps
    end
  end
end
