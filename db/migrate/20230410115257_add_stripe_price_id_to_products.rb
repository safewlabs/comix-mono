class AddStripePriceIdToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :stripe_price_id, :string
  end
end
