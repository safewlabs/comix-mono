# == Schema Information
#
# Table name: product_genres
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  genre_id   :bigint           not null
#  product_id :bigint           not null
#
# Indexes
#
#  index_product_genres_on_genre_id    (genre_id)
#  index_product_genres_on_product_id  (product_id)
#
# Foreign Keys
#
#  fk_rails_...  (genre_id => genres.id)
#  fk_rails_...  (product_id => products.id)
#
require 'rails_helper'

RSpec.describe ProductGenre, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
