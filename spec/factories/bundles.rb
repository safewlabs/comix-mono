# frozen_string_literal: true

# == Schema Information
#
# Table name: bundles
#
#  id            :bigint           not null, primary key
#  description   :text
#  pledge_amount :decimal(, )
#  title         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  project_id    :bigint           not null
#
# Indexes
#
#  index_bundles_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#
FactoryBot.define do
  factory :bundle do
    association :project
    title { Faker::Lorem.sentence(word_count: 3) }
    description { Faker::Lorem.paragraphs(number: 3, supplemental: true) }
    pledge_amount { 20.00 }
  end
end
