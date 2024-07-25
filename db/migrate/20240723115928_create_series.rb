class CreateSeries < ActiveRecord::Migration[7.1]
  def change
    create_table :series do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
