# == Schema Information
#
# Table name: launch_lists
#
#  id         :bigint           not null, primary key
#  email      :string
#  opt_in     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class LaunchList < ApplicationRecord
end
