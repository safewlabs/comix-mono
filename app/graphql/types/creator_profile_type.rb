# frozen_string_literal: true

module Types
  class CreatorProfileType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :formatted_bio, String
    field :avatar, String, null: false

    def avatar
      if object.avatar.present?
        Rails.application.routes.url_helpers.rails_blob_url(object.avatar,
                                                            disposition: "preview",
                                                            host: "comix.one")
      else
        "https://res.cloudinary.com/drg9hguhu/image/upload/v1667569457/comix/78_tage_auf_der_stra%C3%9Fe_des_hasses_000_cover.jpg"
      end
    end

    def formatted_bio
      object.bio&.html_safe
    end
  end
end
