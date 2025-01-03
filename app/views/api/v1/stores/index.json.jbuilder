# frozen_string_literal: true

json.data do
  json.array! @stores do |store|
    json.name store.name
    json.slug store.slug
    json.display_image url_for(store.display_image) if store.display_image.present?
  end
end

json.pagination do
  json.extract! @pagination, :prev_url, :next_url, :count, :page, :next
end