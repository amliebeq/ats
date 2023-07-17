class AddStatusToApplicants < ActiveRecord::Migration[7.0]
  def change
    add_column :applicants, :status, :string, :default => 'New'
  end
end
