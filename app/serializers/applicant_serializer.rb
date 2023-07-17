class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :email, :phone, :city, :state, :lists, :status, :notes, :jobs

  has_many :notes
  has_many :lists
  belongs_to :user
  has_many :jobs
end
