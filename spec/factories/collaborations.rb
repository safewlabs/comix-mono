# == Schema Information
#
# Table name: collaborations
#
#  id                 :bigint           not null, primary key
#  product_id         :bigint
#  creator_id         :bigint
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  collaboration_type :integer          default("writer")
#
FactoryBot.define do
  factory :collaboration do
    association :product, factory: :product
    association :creator, factory: :creator
    collaboration_type { "Artist" }
  end
end
