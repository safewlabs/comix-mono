# frozen_string_literal: true

# == Schema Information
#
# Table name: posts
#
#  id               :bigint           not null, primary key
#  article_type     :integer          default("article")
#  body             :text
#  slug             :string
#  status           :integer          default("draft")
#  summary          :text
#  title            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  youtube_video_id :string
#
require "rails_helper"

RSpec.describe Post, type: :model do
  let(:post) { create(:post) }

  describe "enums" do
    it "defines the correct article_type values" do
      expect(Post.article_types.keys).to match_array(%w[article interview feature video news])
    end

    it "defines the correct status values" do
      expect(Post.statuses.keys).to match_array(%w[draft published])
    end
  end
end
