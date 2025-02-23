# frozen_string_literal: true

json.data do
  json.name @store.name
  json.description @store.description
  json.cover_image url_for(@store.cover_image) if @store.cover_image.present?
  json.display_image url_for(@store.display_image) if @store.display_image.present?

  json.products @products do |product|
    json.product_name product.name
    json.product_slug product.slug
    json.product_store_name product.store.name
    json.issue_cover url_for(product.issue_cover) if product.issue_cover.present?
  end
end
