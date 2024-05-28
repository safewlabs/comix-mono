# frozen_string_literal: true

class AddStatusToProducts < ActiveRecord::Migration[7.1]
  def change
    add_column :products, :status, :integer, default: 0
    publish_all_current_products
  end

  def publish_all_current_products
    Product.all.each do |product|
      product.published!
    end
  end
end
