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
FactoryBot.define do
  factory :line_item do
    quantity { 1 }
    product { nil }
    cart { nil }
    order { nil }
  end
end
