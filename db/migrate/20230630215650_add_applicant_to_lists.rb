class AddApplicantToLists < ActiveRecord::Migration[7.0]
  def change
    add_column :lists, :applicant_id, :integer
  end
end
