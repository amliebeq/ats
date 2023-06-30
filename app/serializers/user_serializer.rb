class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :title, :username, :password_digest, :jobs

  has_many :jobs
end
