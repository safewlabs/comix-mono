# frozen_string_literal: true

# == Schema Information
#
# Table name: bundles
#
#  id            :bigint           not null, primary key
#  description   :text
#  pledge_amount :decimal(, )
#  slug          :string           not null
#  title         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  project_id    :bigint           not null
#
# Indexes
#
#  index_bundles_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#
class Bundle < ApplicationRecord
  include Sluggable
  belongs_to :project
end
