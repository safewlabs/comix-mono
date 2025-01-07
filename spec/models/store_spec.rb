# frozen_string_literal: true

# == Schema Information
#
# Table name: stores
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_stores_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Store, type: :model do
  let(:store) { build(:store) }

  # Validations
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:description) }

  # Associations
  it { is_expected.to belong_to(:user) }
  it { is_expected.to have_many(:products).dependent(:destroy) }

  # Attachments
  it { is_expected.to have_one_attached(:cover_image) }
  it { is_expected.to have_one_attached(:display_image) }
  it { is_expected.to have_rich_text(:description) }

  # TODO: Build shared examples for Sluggable
  # it_behaves_like "sluggable"
end
