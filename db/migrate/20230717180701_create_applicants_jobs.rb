class CreateApplicantsJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants_jobs , id: false do |t|
      t.references :applicant, foreign_key: true
      t.references :job, foreign_key:true
    end

    add_index :applicants_jobs, [:applicant_id, :job_id], unique: true
  end
end
