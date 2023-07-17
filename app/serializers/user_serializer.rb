class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :title, :username

  has_many :applicants
  has_many :jobs
  has_many :lists
  has_many :notes
  has_many :to_dos
end
