# frozen_string_literal: true

class CreateBackings < ActiveRecord::Migration[7.0]
  def change
    create_table :backings do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.references :bundle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
