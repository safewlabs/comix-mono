# frozen_string_literal: true

class PagesController < ApplicationController
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
