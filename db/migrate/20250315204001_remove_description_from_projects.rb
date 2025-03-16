class RemoveDescriptionFromProjects < ActiveRecord::Migration[7.2]
  def change
    remove_column :projects, :description, :text
  end
end
