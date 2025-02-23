# frozen_string_literal: true

json.data do
  json.name @product.name
  json.description @product.description
  json.page_count @product.page_count
  json.price @product.price
  json.release_date @product.release_date
  json.slug @product.slug
  json.status
  json.issue_cover url_for(@product.issue_cover) if @product.issue_cover.present?

  json.collaborations @product.collaborations do |collaboration|
    json.creator_name collaboration.creator_profile.name
    json.avatar url_for(@product.avatar) if collaboration.creator_profile.avatar.present?
  end

  json.other_products @other_products do |other_product|
    json.product_name other_product.name
    json.product_slug other_product.slug
    json.product_store_name other_product.store.name
    json.issue_cover url_for(other_product.issue_cover) if other_product.issue_cover.present?
  end
end
