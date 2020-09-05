# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  store_id   :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  belongs_to :user
  belongs_to :store
end
