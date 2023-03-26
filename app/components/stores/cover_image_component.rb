# frozen_string_literal: true

class Stores::CoverImageComponent < ViewComponent::Base
  def initialize(store:)
    @store = store
  end

  def store_cover_image
    if @store.cover_image.present?
      rails_blob_url(@store.cover_image)
    else
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1500&h=500&q=80"
    end
  end
end
