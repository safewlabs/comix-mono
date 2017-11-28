class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.references :store, foreign_key: true

      t.timestamps
    end
  end
end
