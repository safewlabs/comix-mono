# frozen_string_literal: true

module Types
  class ProductType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :price, Float
    field :page_count, Integer
    field :release_date, GraphQL::Types::ISO8601DateTime
    field :age_rating, String
    field :store_id, Integer, null: false
    field :slug, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :description, String
    field :file_attachment, String

    def file_attachment
      Rails.application.routes.url_helpers.rails_blob_url(object.file_attachment,
                                                          disposition: "preview",
                                                          host: "comix.one")
    end
  end
end
