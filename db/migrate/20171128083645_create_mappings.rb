class CreateMappings < ActiveRecord::Migration[5.2]
  def change
    create_table :mappings do |t|
      t.integer :genre_id
      t.integer :product_id

      t.timestamps
    end
  end
end
