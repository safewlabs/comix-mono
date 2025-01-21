# frozen_string_literal: true

# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :cart do
    trait :with_line_items do
      transient do
        line_items_count { 2 }
      end

      after(:create) do |cart, evaluator|
        create_list(:line_item, evaluator.line_items_count, cart: cart)
      end
    end
  end
end
