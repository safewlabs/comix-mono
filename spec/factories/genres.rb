# frozen_string_literal: true

# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string
#  status     :integer          default("published")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :genre do
    name { Faker::Music.genre }
  end
end
