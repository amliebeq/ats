class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.integer :applicant_id
      t.integer :user_id
      t.string :body

      t.timestamps
    end
  end
end
