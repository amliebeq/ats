class User < ApplicationRecord
    has_secure_password
    
    has_many :notes
    has_many :applicants
    has_many :jobs
    has_many :lists

    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :title, presence: true
end
