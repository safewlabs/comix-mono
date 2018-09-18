class CreateCreators < ActiveRecord::Migration[5.2]
  def change
    create_table :creators do |t|
      t.string :name
      t.text :bio
      t.string :website
      t.string :blog
      t.string :twitter
      t.string :instagram
      t.string :facebook

      t.timestamps
    end
  end
end
