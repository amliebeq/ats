class Job < ApplicationRecord
    belongs_to :user
    has_and_belongs_to_many :applicants

    validates :title, presence: true
    validates :description, presence: true
    validates :pay_rate, presence: true
    validates :location, presence: true
    validates :user_id, presence: true, numericality: true
end
