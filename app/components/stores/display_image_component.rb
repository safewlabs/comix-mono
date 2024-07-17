# frozen_string_literal: true

class Stores::DisplayImageComponent < ViewComponent::Base
  def initialize(store:, main: false)
    @store = store
    @main = main
  end

  def store_display_image
    if @store.display_image.present?
      image_tag(@store.display_image,
                loading: "lazy", alt: @store.name, width: "120", height: "120",
                class: "shadow-xl align-middle border-none #{main_store_page}")
    else
      image_tag("https://placehold.co/320x320",
                alt: "placeholder image", width: "100", height: "100",
                class: "shadow-xl h-auto align-middle border-none #{main_store_page}")
    end
  end

  def main_store_page
    return "w-full" if @main.eql?(false)
    "-mt-16"
  end
end
