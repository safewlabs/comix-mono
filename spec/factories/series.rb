# == Schema Information
#
# Table name: series
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :series do
    title { "MyString" }
    description { "MyText" }
  end
end
