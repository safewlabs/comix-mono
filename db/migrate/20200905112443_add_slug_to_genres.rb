class AddSlugToGenres < ActiveRecord::Migration[6.0]
  def change
    add_column :genres, :slug, :string
  end
end
