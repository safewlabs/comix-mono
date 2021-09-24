class DropCollaborationType < ActiveRecord::Migration[6.1]
  def change
    remove_column :collaborations, :collaboration_type, :string
  end
end
