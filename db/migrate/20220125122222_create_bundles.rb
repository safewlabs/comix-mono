# frozen_string_literal: true

class CreateBundles < ActiveRecord::Migration[7.0]
  def change
    create_table :bundles do |t|
      t.string :title
      t.decimal :pledge_amount
      t.text :description
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
