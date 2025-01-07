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
class Order < ApplicationRecord
  has_many :line_items
  belongs_to :user
  belongs_to :cart
  validates :cart_id, :user_id, presence: true

  enum status: { draft: 0, success: 1, cancelled: 2, failed: 3 }
end
