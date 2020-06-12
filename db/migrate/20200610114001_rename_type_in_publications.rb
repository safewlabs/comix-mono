class RenameTypeInPublications < ActiveRecord::Migration[6.0]
  def change
    rename_column :publications, :type, :publication_type
  end
end
