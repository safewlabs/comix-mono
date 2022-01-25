class AddAccountToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :account, null: false, foreign_key: true
  end
end
