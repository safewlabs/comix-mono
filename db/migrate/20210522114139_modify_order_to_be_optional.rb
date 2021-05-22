class ModifyOrderToBeOptional < ActiveRecord::Migration[6.1]
  def change
    change_column :line_items, :order_id, :bigint, null: true
  end
end
