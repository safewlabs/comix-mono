# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
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
