class CreateLaunchLists < ActiveRecord::Migration[7.0]
  def change
    create_table :launch_lists do |t|
      t.string :email
      t.boolean :opt_in

      t.timestamps
    end
  end
end
