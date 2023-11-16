# frozen_string_literal: true

# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string
#  status     :integer          default("published")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :name, uniqueness: true
  has_many :product_genres
  has_many :products, through: :product_genres
  enum status: {
    published: 0,
    unpublished: 1
  }
end
