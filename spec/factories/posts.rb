# frozen_string_literal: true

# == Schema Information
#
# Table name: posts
#
#  id               :bigint           not null, primary key
#  article_type     :integer          default("article")
#  body             :text
#  slug             :string
#  status           :integer          default("draft")
#  summary          :text
#  title            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  author_id        :bigint
#  youtube_video_id :string
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => authors.id)
#
FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence }
    body { Faker::Lorem.paragraph(sentence_count: 15) }
    summary { Faker::Lorem.paragraph(sentence_count: 3) }
  end
end
