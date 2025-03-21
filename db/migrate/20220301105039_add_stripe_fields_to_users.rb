# frozen_string_literal: true

class AddStripeFieldsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :uid, :string
    add_column :users, :provider, :string
    add_column :users, :access_code, :string
    add_column :users, :publishable_key, :string
  end
end
