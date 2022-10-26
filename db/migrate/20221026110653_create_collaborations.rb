class CreateCollaborations < ActiveRecord::Migration[7.0]
  def change
    create_table :collaborations do |t|
      t.references :product, null: false, foreign_key: true
      t.references :creator_profile, null: false, foreign_key: true
      t.integer :collaboration_type

      t.timestamps
    end
  end
end
