# == Schema Information
#
# Table name: products_categories
#
#  id          :bigint           not null, primary key
#  product_id  :bigint
#  category_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :products_category do
    association :product, factory: :product
    association :category, factory: :category
  end
end
