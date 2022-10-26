class CreateProductGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :product_genres do |t|
      t.references :product, null: false, foreign_key: true
      t.references :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
