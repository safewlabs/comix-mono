# frozen_string_literal: true

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
require "rails_helper"

RSpec.describe LaunchList, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
