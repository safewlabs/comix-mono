# frozen_string_literal: true

class DeviseTokenAuthUpdateUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :uid, :string, null: false, default: ""
    add_column :users, :tokens, :json
    add_index :users, [:uid, :provider], unique: true
  end
end
