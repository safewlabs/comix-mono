json.array! @new_releases do |product|
  json.product product
  json.store product.store
end