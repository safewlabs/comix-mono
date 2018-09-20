FactoryBot.define do
  factory :products_category do
    association :product, factory: :product
    association :category, factory: :category
  end
end
