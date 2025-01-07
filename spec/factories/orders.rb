# frozen_string_literal: true

# == Schema Information
#
# Table name: orders
#
#  id              :bigint           not null, primary key
#  order_reference :string
#  status          :integer          default("draft")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  cart_id         :bigint           not null
#  user_id         :bigint           not null
#
# Indexes
#
#  index_orders_on_cart_id  (cart_id)
#  index_orders_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (cart_id => carts.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :order do
    cart
    user
    order_reference { "MyString" }
  end
end
