# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.integer :page_count
      t.datetime :release_date
      t.string :age_rating
      t.references :store, null: false, foreign_key: true
      t.string :slug

      t.timestamps
    end
  end
end
