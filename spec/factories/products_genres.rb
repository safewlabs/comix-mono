FactoryBot.define do
  factory :products_genre do
    association :product, factory: :product
    association :genre, factory: :genre
  end
end
