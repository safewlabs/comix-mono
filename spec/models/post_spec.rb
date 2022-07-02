# frozen_string_literal: true

# == Schema Information
#
# Table name: posts
#
#  id               :bigint           not null, primary key
#  article_type     :integer          default("article")
#  body             :text
#  slug             :string
#  summary          :text
#  title            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  youtube_video_id :string
#
require "rails_helper"

RSpec.describe Post, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
