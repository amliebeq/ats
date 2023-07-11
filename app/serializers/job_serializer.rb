class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :pay_rate, :location, :company, :applicants

  has_many :applicants, Serializer: ApplicantJobSerializer
end
