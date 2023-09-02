# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field_class GraphqlDevise::Types::BaseField
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    field :purchases, [Types::PurchaseType], description: "List of Purchases for a user" do
      argument :user_id, ID, required: true
    end

    def purchases(user_id:)
      Purchase.where(user_id:)
    end

    def
    def(test_field)
      "Hello World!"
    end
  end
end
