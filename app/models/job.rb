class Job < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :description, presence: true, length: { minimum: 50 }
    validates :pay_rate, presence: true
    validates :location, presence: true
    validates :user_id, presence: true, numericality: true
end
