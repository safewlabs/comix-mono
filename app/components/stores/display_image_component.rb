# frozen_string_literal: true

class Stores::DisplayImageComponent < ViewComponent::Base
  def initialize(store:)
    @store = store
  end

  def store_display_image
    if @store.display_image.present?
      image_tag(@store.display_image,
                loading: "lazy", alt: @store.name, width: "120", height: "120",
                class: "shadow-xl rounded-lg align-middle border-none w-full")
    else
      image_tag("https://placehold.co/120x120",
                alt: "placeholder image", width: "100", height: "100",
                class: "shadow-xl rounded-lg h-auto align-middle border-none w-full")
    end
  end
end
