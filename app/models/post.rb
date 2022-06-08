# frozen_string_literal: true

# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  article_type :integer          default("article")
#  body         :text
#  slug         :string
#  summary      :text
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Post < ApplicationRecord
  include Sluggable
  enum article_type: {
    article: 0,
    interview: 1,
    feature: 2
  }
end
