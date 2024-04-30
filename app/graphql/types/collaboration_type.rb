# frozen_string_literal: true

module Types
  class CollaborationType < Types::BaseObject
    field :id, ID, null: false
    field :creator_profile, Types::CreatorProfileType, null: false

    def creator_profile
      object.creator_profile
    end
  end
end
