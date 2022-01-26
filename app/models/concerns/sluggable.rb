# frozen_string_literal: true

# Module for generating unique slugs for records
module Sluggable
  extend ActiveSupport::Concern

  included do
    before_create :set_slug
    validates :slug, uniqueness: true
  end

  def generate_slug
    identifier = try(:name) || title
    random_string = SecureRandom.hex(6)
    "#{identifier.parameterize}-#{random_string}"
  end

  def to_param
    slug
  end

  private
    def set_slug
      self.slug = generate_slug
    end
end
