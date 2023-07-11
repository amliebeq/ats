class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :applicant_id, :applicants

  has_many :applicants
end
