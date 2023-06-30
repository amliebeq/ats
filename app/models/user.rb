class User < ApplicationRecord
    has_many :notes
    has_many :applicants, through: :notes
    has_many :jobs
end
