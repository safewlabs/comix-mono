class AddStatusToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :status, :integer, default: 0
  end
end
