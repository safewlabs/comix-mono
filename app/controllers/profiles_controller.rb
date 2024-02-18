# frozen_string_literal: true

class ProfilesController < ApplicationController
  def index
    @pagy, @creator_profiles = pagy(CreatorProfile.all)
    set_meta_tags title: "Buy Comics",
          description: "Indie Comic Book Creator Index",
          keywords: "Comics, Indie comics, Indie creator",
          twitter: {
            card: "photo",
            image: {
              _: @creator_profiles.first.profile_cover,
              width: 200,
              height: 200
            }
          },
          og: {
            title: :title,
            site_name: :site,
            image: @creator_profiles.first.profile_cover
          }
  end

  def show
    @creator_profile = CreatorProfile.find_by(slug: params[:slug])
    set_meta_tags title: @creator_profile.name,
                  description: @creator_profile.bio,
                  keywords: "Comics, Indie comics, Indie creator",
                  twitter: {
                    card: "photo",
                    image: {
                      _: @creator_profile.avatar,
                      width: 200,
                      height: 200
                    }
                  },
                  og: {
                    title: :title,
                    site_name: :site,
                    image: @creator_profile.avatar
                  }
  end
end
