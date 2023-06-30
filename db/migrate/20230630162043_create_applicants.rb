class CreateApplicants < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.string :email
      t.integer :phone
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
