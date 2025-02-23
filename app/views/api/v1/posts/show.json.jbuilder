# frozen_string_literal: true

json.data do
  json.title @post.title
  json.body @post.body
  json.slug @post.slug
  json.status @post.status
  json.summary @post.summary
  json.article_type @post.article_type
end
