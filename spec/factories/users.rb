FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'password' }
    password_confirmation { 'password' }

    before(:create) do |user|
      user.add_role(:buyer)
    end

    trait :creator do
      after(:create) do |user|
        user.add_role(:creator)
      end
    end

    trait :with_stores do
      transient do
        number_of_stores { 2 }
      end

      after(:create) do |user, executor|
        user.add_role(:creator)
        create_list(:team, executor.number_of_stores, user: user)
      end
    end
  end
end
