class ToDo < ApplicationRecord
    belongs_to :user

    validates :item, presence: true
    validates :user_id, presence: true
end
