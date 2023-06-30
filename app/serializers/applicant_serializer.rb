class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :email, :phone, :city, :state

  has_many :resumes
  has_many :notes
  has_many :users
  has_many :lists
end
