# == Schema Information
#
# Table name: products_categories
#
#  id          :bigint(8)        not null, primary key
#  product_id  :bigint(8)
#  category_id :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ProductsCategory < ApplicationRecord
  belongs_to :product
  belongs_to :category
end
