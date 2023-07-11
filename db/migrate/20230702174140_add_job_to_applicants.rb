class AddJobToApplicants < ActiveRecord::Migration[7.0]
  def change
    add_column :applicants, :job_id, :integer
  end
end
