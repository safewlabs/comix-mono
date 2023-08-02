# frozen_string_literal: true

module Types
  class PurchaseType < Types::BaseObject
    field :id, ID, null: false
    field :product, Types::ProductType, null: false
  end
end
