# frozen_string_literal: true

class AddUserRefrenceToCreatorProfiless < ActiveRecord::Migration[7.0]
  def change
    add_reference :creator_profiles, :user, null: true, foreign_key: true
  end
end
