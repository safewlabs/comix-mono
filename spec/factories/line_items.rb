FactoryBot.define do
  factory :line_item do
    quantity { 1 }
    product { nil }
    cart { nil }
    order { nil }
  end
end
