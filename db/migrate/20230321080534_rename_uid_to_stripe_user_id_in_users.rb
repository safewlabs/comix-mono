# frozen_string_literal: true

class RenameUidToStripeUserIdInUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column(:users, :uid, :stripe_user_id)
  end
end
