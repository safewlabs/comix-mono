# frozen_string_literal: true

class AddVideoUrlToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :video_url, :string
  end
end
