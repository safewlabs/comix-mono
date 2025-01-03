# frozen_string_literal: true

json.array! @creator_profiles do |creator_profile|
  json.name creator_profile.name
  json.slug creator_profile.slug
  json.skills creator_profile.skills
  json.avatar url_for(creator_profile.avatar) if creator_profile.avatar.present?
end
