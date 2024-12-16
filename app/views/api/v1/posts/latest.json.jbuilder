# frozen_string_literal: true

json.array! @posts do |post|
  json.title post.title
  json.article_type post.article_type
  json.summary post.summary
  json.slug post.slug
  json.created_at post.created_at
end
