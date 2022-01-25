# frozen_string_literal: true

class CreatorProfile < ApplicationRecord
  belongs_to :user, optional: true
  has_many :projects_creator_profiles, dependent: :destroy
  has_many :projects, through: :projects_creator_profiles
end
