class Role < ApplicationRecord
    has_many :members, through: :member_roles, dependent: :destroy  
end
