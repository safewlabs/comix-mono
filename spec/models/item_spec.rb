# frozen_string_literal: true

# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  description :text
#  slug        :string           not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  bundle_id   :bigint           not null
#
# Indexes
#
#  index_items_on_bundle_id  (bundle_id)
#
# Foreign Keys
#
#  fk_rails_...  (bundle_id => bundles.id)
#
require "rails_helper"

RSpec.describe Item, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
