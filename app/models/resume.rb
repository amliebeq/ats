class Resume < ApplicationRecord
  belongs_to :applicant
  has_one_attached :file
end
