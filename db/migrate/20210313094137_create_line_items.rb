class CreateLineItems < ActiveRecord::Migration[6.1]
  def change
    create_table :line_items do |t|
      t.integer :quantity
      t.references :product, null: false, foreign_key: true, index: true
      t.references :cart, null: false, foreign_key: true, index: true
      t.references :order, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
