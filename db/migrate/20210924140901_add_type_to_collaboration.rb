class AddTypeToCollaboration < ActiveRecord::Migration[6.1]
  def change
    add_column :collaborations, :collaboration_type, :integer, default: 0
  end
end
