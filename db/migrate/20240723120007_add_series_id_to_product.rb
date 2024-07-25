class AddSeriesIdToProduct < ActiveRecord::Migration[7.1]
  def change
    add_reference :products, :series, null: true, foreign_key: true
  end
end
