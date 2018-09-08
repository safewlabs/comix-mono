class AddOwnerIdToStores < ActiveRecord::Migration[5.2]
  def change
    add_column :stores, :owner_id, :bigint
  end
end
