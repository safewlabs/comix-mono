# frozen_string_literal: true

class LandingController < ApplicationController
  def index
  end

  def star_gazers
    set_meta_tags title: "Star Gazers : Sirius",
      description: "Star Gazers : Sirius",
      keywords: "Comics, Indie comics"
  end
end
