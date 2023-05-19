class AddEmailToCreatorProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :creator_profiles, :email, :string
  end
end
