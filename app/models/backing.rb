# == Schema Information
#
# Table name: backings
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bundle_id  :bigint           not null
#  project_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_backings_on_bundle_id   (bundle_id)
#  index_backings_on_project_id  (project_id)
#  index_backings_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (bundle_id => bundles.id)
#  fk_rails_...  (project_id => projects.id)
#  fk_rails_...  (user_id => users.id)
#
class Backing < ApplicationRecord
  belongs_to :user
  belongs_to :project
  belongs_to :bundle
end
