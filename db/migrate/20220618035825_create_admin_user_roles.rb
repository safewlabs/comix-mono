# frozen_string_literal: true

class CreateAdminUserRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_users_roles do |t|
      t.references :admin_user, null: false, foreign_key: true
      t.references :role, null: false, foreign_key: true

      t.timestamps
    end
    add_index(:admin_users_roles, [ :admin_user_id, :role_id ])
  end
end
