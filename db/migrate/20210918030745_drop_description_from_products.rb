class DropDescriptionFromProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :description, :text
  end
end
