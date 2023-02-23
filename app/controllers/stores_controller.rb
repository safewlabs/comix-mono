# frozen_string_literal: true

class StoresController < ApplicationController
  def show
    @store = Store.find_by(slug: params[:slug])
    set_meta_tags title: @store.name,
                  keywords: 'Comics, Indie comics',
                  twitter: {
                    card: "photo",
                    image: {
                      _: @store.display_image,
                      width: 200,
                      height: 200
                    }
                  },
                  og: {
                    title: :title
                    site_name: :site,
                    image: @store.display_image
                  }
  end
end
