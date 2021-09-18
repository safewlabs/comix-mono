class DropDescriptionFromStores < ActiveRecord::Migration[6.1]
  def change
    remove_column :stores, :description, :text
  end
end
