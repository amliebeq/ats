class Applicant < ApplicationRecord
    has_one_attached :resume
    has_many :notes
    belongs_to :user
    has_and_belongs_to_many :lists
    has_and_belongs_to_many :jobs

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, email: true
    validates :phone, length: { is: 10 }, numericality: true
end
