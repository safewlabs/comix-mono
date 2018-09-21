class CreatePublications < ActiveRecord::Migration[5.2]
  def change
    create_table :publications do |t|
      t.string :name
      t.text :bio
      t.string :type

      t.timestamps
    end
  end
end
