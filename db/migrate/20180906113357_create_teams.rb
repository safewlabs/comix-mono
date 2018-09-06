class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.bigint :store_id
      t.bigint :user_id

      t.timestamps
    end
    
    add_index :teams, [:store_id, :user_id]
  end
end
