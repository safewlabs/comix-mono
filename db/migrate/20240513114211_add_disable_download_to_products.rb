# frozen_string_literal: true

class AddDisableDownloadToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :disable_download, :boolean, default: false
  end
end
