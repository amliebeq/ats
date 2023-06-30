class CreateApplicantsLists < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants_lists, id: false do |t|
      t.references :applicant, foreign_key: true
      t.references :list, foreign_key: true
    end

    add_index :applicants_lists, [:applicant_id, :list_id], unique: true
  end
end
