# frozen_string_literal: true

json.data do
  json.name @creator_profile.name
  json.bio @creator_profile.bio
  json.skills @creator_profile.skills
  json.email @creator_profile.email
  json.facebook @creator_profile.facebook
  json.instagram @creator_profile.instagram
  json.tiktok @creator_profile.tiktok
  json.twitter @creator_profile.twitter
  json.youtube @creator_profile.youtube
  json.website @creator_profile.website
  json.avatar url_for(@creator_profile.avatar) if @creator_profile.avatar.present?
  json.profile_cover url_for(@creator_profile.profile_cover) if @creator_profile.profile_cover.present?

  json.collaborations @collaborations do |collaboration|
    json.product_name collaboration.product.name
    json.product_slug collaboration.product.slug
    json.product_store_name collaboration.product.store.name
    json.issue_cover url_for(collaboration.product.issue_cover) if collaboration.product.issue_cover.present?
  end
end