# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :user
  has_many :projects_creator_profiles, dependent: :destroy
  has_many :creator_profiles, through: :projects_creator_profiles
end
