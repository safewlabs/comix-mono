# frozen_string_literal: true

class ProfilesController < ApplicationController
  before_action :use_jsx_rendering_defaults, only: [:index]
  layout "newui", only: [:index]

  def index
    @pagy, @creator_profiles = pagy(CreatorProfile.includes([:avatar_attachment]).all)
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
    @creator_profile = CreatorProfile.includes([:avatar_attachment]).find_by(slug: params[:slug])
    @collaborations = @creator_profile.collaborations.includes(:product)
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
