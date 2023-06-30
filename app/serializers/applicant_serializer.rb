class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :email, :phone, :city, :state, :lists, :notes

  has_many :notes
  has_many :lists
end
