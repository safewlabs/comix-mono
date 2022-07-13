# frozen_string_literal: true

class AddYoutubeVideoIdToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :youtube_video_id, :string
  end
end
