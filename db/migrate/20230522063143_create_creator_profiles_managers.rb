# frozen_string_literal: true

class CreateCreatorProfilesManagers < ActiveRecord::Migration[7.0]
  def change
    create_table :creator_profiles_managers do |t|
      t.references :creator_profile, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
