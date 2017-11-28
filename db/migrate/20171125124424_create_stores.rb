class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :title
      t.text :description
      t.references :member, foreign_key: true

      t.timestamps
    end
  end
end
