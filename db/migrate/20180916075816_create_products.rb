class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.float :price
      t.integer :page_count
      t.datetime :release_date
      t.string :age_rating
      t.references :store, foreign_key: true

      t.timestamps
    end
  end
end
