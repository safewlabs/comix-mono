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
#  youtube_video_id :string
#
class Post < ApplicationRecord
  include Sluggable
  has_rich_text :body

  enum article_type: {
    article: 0,
    interview: 1,
    feature: 2
  }

  enum status: {
    draft: 0,
    published: 1
  }
end
