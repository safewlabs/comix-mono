class AddPublicationIdToProducts < ActiveRecord::Migration[5.2]
  def change
    add_reference :products, :publication, foreign_key: true, index: true
  end
end
