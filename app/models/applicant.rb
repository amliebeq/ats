class Applicant < ApplicationRecord
    has_many_attached :resumes
    has_many :notes
    has_many :users, through: :notes
    has_and_belongs_to_many :lists
end
