FactoryBot.define do
  factory :collaboration do
    association :product, factory: :product
    association :creator, factory: :creator
    collaboration_type { "Artist" }
  end
end
