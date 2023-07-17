class RemoveJobIdFromApplicants < ActiveRecord::Migration[6.1]
  def change
    remove_column :applicants, :job_id
  end
end
