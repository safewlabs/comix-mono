class CreateMembersRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :members_roles do |t|
      t.integer :member_id
      t.integer :role_id
    end
  end
end
