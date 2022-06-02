# frozen_string_literal: true

class AddArticleTypeToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :article_type, :integer, default: 0
  end
end
