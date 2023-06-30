class List < ApplicationRecord
    has_and_belongs_to_many :applicants
    belongs_to :user

    validates :name, presence: true
    validates :user_id, presence: true, numericality: true
end
