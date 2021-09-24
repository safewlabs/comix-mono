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
require 'rails_helper'

RSpec.describe LineItem, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
