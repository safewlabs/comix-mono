# frozen_string_literal: true

module Types
  class PurchasesType < Types::BaseObject
    field :products, [Types::Products], null: true
  end
end
