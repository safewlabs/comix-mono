# frozen_string_literal: true

json.array! @genres do |genre|
  json.name genre.name
  json.slug genre.slug
  json.cover url_for(genre.cover) if genre.cover.present?
end
