class CreateProductsGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :products_genres do |t|
      t.references :product, foreign_key: true
      t.references :genre, foreign_key: true

      t.timestamps
    end
  end
end
