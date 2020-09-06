class AddSlugToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :slug, :string
  end
end
