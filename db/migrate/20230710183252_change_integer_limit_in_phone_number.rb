class ChangeIntegerLimitInPhoneNumber < ActiveRecord::Migration[7.0]
  def change
    change_column :applicants, :phone, :integer, limit: 8
  end
end
