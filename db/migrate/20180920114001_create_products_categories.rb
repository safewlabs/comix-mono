class CreateProductsCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :products_categories do |t|
      t.references :product, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
