# == Schema Information
#
# Table name: orders
#
#  id              :bigint           not null, primary key
#  user_id         :bigint           not null
#  order_reference :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Order < ApplicationRecord
  belongs_to :user
  has_many :line_items, dependent: :destroy

  after_commit :generate_order_reference

  def generate_order_reference
    update_attribute(order_reference: SecureRandom.alphanumeric(10))
  end
end
