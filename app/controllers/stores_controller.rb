# frozen_string_literal: true

class StoresController < ApplicationController
  def index
    stores = Store.order("RANDOM()")
    @pagy, @stores = pagy(stores)
    set_meta_tags title: "Buy Comics",
          description: "Buy Comics by Indie Creators",
          keywords: "Comics, Indie comics",
          twitter: {
            card: "photo",
            image: {
              _: @stores.first.display_image,
              width: 200,
              height: 200
            }
          },
          og: {
            title: :title,
            site_name: :site,
            image: @stores.first.display_image
          }
  end

  def show
    @store = Store.find_by(slug: params[:slug])
    set_meta_tags title: @store.name,
                  keywords: "Comics, Indie comics",
                  twitter: {
                    card: "photo",
                    image: {
                      _: @store.display_image,
                      width: 200,
                      height: 200
                    }
                  },
                  og: {
                    title: :title,
                    site_name: :site,
                    image: @store.display_image
                  }
  end
end
