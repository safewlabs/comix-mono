class AddSlugToCreator < ActiveRecord::Migration[5.2]
  def change
    add_column :creators, :slug, :string
  end
end
