# frozen_string_literal: true

class AddCampaignEndsAtToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :campaign_ends_at, :datetime
  end
end
