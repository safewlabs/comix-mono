# frozen_string_literal: true

json.array! @stores do |store|
  json.name store.name
  json.slug store.slug
  json.issue_cover url_for(store.display_image)
end
