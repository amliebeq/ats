class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :pay_rate
      t.string :location
      t.string :company

      t.timestamps
    end
  end
end
