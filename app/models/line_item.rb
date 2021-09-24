# == Schema Information
#
# Table name: line_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer
#  product_id :bigint           not null
#  cart_id    :bigint           not null
#  order_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class LineItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart
  belongs_to :order, optional: true

  def total_price
    self.quantity * self.product.price
  end
end
