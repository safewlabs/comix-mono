# frozen_string_literal: true

json.array! @genres do |genre|
  json.name genre.name
  json.slug genre.slug
end
