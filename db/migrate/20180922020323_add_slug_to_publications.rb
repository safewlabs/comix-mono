class AddSlugToPublications < ActiveRecord::Migration[5.2]
  def change
    add_column :publications, :slug, :string, index: true
  end
end
