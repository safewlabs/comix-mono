# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  store_id   :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :team do
    association :store, factory: :store
    association :user, factory: :user
  end
end
