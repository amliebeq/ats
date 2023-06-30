class CreateResumes < ActiveRecord::Migration[7.0]
  def change
    create_table :resumes do |t|
      t.references :applicant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
