class AddIndexToGenres < ActiveRecord::Migration[6.1]
  def change
    add_index :genres, :slug
  end
end
