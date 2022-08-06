class AddFieldsToCreatorProfile < ActiveRecord::Migration[7.0]
  def change
    add_column :creator_profiles, :website, :string
    add_column :creator_profiles, :skills, :string
    add_column :creator_profiles, :twitter, :string
    add_column :creator_profiles, :facebook, :string
    add_column :creator_profiles, :instagram, :string
    add_column :creator_profiles, :tiktok, :string
    add_column :creator_profiles, :youtube, :string
  end
end
