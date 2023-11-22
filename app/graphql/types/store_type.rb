# frozen_string_literal: true

module Types
  class StoreType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :display_image, String

    def display_image
      Rails.application.routes.url_helpers.rails_blob_url(object.display_image,
                                                          disposition: "preview",
                                                          host: "comix.one")
    end
  end
end
