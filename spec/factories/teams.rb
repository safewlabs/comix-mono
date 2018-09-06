FactoryBot.define do
  factory :team do
    association :store, factory: :store
    association :user, factory: :user
  end
end
