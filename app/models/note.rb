class Note < ApplicationRecord
    belongs_to :user
    belongs_to :applicant

    validates :body, presence: true
end
