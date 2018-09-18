# == Schema Information
#
# Table name: teams
#
#  id         :bigint(8)        not null, primary key
#  store_id   :bigint(8)
#  user_id    :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  belongs_to :user
  belongs_to :store
end
