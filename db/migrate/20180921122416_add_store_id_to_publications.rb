class AddStoreIdToPublications < ActiveRecord::Migration[5.2]
  def change
    add_reference :publications, :store, foreign_key: true, index: true
  end
end
