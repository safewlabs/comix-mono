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
FactoryBot.define do
  factory :order do
    user
    order_reference { "MyString" }
  end
end
