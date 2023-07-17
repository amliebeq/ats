class CreateToDos < ActiveRecord::Migration[7.0]
  def change
    create_table :to_dos do |t|
      t.string :item
      t.boolean :completed
      t.integer :user_id

      t.timestamps
    end
  end
end
