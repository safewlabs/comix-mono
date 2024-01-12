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
class Post < ApplicationRecord
  include Sluggable

  enum article_type: {
    article: 0,
    interview: 1,
    feature: 2,
    video: 3,
    news: 4
  }

  enum status: {
    draft: 0,
    published: 1
  }

  belongs_to :author, optional: true
end
