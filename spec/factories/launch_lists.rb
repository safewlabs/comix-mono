# frozen_string_literal: true

# == Schema Information
#
# Table name: launch_lists
#
#  id         :bigint           not null, primary key
#  email      :string
#  opt_in     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :launch_list do
    email { "MyString" }
    opt_in { false }
  end
end
