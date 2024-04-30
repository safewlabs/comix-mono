# frozen_string_literal: true

module Types
  class ProductType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :price, Float
    field :page_count, Integer
    field :release_date, GraphQL::Types::ISO8601DateTime
    field :age_rating, String
    field :slug, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :description, String
    field :file_attachment, String
    field :issue_cover, String
    field :store, Types::StoreType, null: false
    field :collaborations, [Types::CollaborationType]

    def file_attachment
      Rails.application.routes.url_helpers.rails_blob_url(object.file_attachment,
                                                          disposition: "preview",
                                                          host: "comix.one")
    end

    def issue_cover
      Rails.application.routes.url_helpers.rails_blob_url(object.issue_cover,
                                                          disposition: "preview",
                                                          host: "comix.one")
    end
  end
end
