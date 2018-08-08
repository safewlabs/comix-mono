class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :description
      t.references :user
      t.string :slug

      t.timestamps
    end
  end
end
