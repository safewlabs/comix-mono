# == Schema Information
#
# Table name: roles
#
#  id            :bigint           not null, primary key
#  name          :string
#  resource_type :string
#  resource_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

# polymorphic model for roles
class Role < ApplicationRecord
  has_and_belongs_to_many :users, join_table: :users_roles
  belongs_to :resource, polymorphic: true, optional: true
  validates :resource_type, inclusion: { in: Rolify.resource_types }, allow_nil: true
  scopify
end
