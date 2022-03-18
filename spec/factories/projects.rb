# frozen_string_literal: true

# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  blurb        :text
#  description  :text
#  funding_goal :decimal(, )
#  funds_raised :decimal(, )
#  slug         :string           not null
#  status       :integer          default("draft")
#  title        :string
#  video_url    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_projects_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :project do
    association :user
    title { Faker::Lorem.sentence(word_count: 3) }
    blurb { Faker::Lorem.sentence(word_count: 20)  }
    description { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
    funding_goal { 300.00 }
  end
end