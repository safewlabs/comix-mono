# frozen_string_literal: true

json.array! @top_ten do |product|
  json.name product.name
  json.store_name product.store.name
  json.price product.price
  json.slug product.slug
  json.created_at product.created_at
  json.issue_cover url_for(product.issue_cover)
end