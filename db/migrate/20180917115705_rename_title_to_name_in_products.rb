class RenameTitleToNameInProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :title, :name
  end
end
