class CreateCollaborations < ActiveRecord::Migration[5.2]
  def change
    create_table :collaborations do |t|
      t.references :product, foreign_key: true
      t.references :creator, foreign_key: true
      t.string :collaboration_type

      t.timestamps
    end
  end
end
