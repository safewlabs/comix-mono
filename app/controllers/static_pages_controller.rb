# frozen_string_literal: true

class StaticPagesController < ApplicationController
  before_action :use_jsx_rendering_defaults, only: [:for_creators]
  layout "newui", only: [:for_creators]

  def about
    set_meta_tags title: "Our Story",
      description: "Our Story page",
      keywords: "Comics, Indie comics"
  end

  def for_creators
    set_meta_tags title: "For Creators",
      description: "For Creators page",
      keywords: "Comics, Indie comics"
  end
end
