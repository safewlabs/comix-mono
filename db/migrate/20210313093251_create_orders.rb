class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true, index: true
      t.string :order_reference

      t.timestamps
    end
  end
end
