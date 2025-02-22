# frozen_string_literal: true

json.data do
  json.genre_name @genre.name
  json.products @products do |product|
    json.name product.name
    json.slug product.slug
    json.price product.formatted_price
    json.store_name product.store.name
    json.store_slug product.store.name
    json.avatar url_for(product.issue_cover) if product.issue_cover.present?
  end
end

json.pagination do
  json.extract! @pagination, :prev_url, :next_url, :count, :page, :next
end
