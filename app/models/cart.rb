# frozen_string_literal: true

# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
  has_many :line_items, dependent: :destroy
  has_many :orders

  def total
    total_amount = line_items.to_a.sum { |line_item| line_item.total }
    total_amount * 100
  end
end
