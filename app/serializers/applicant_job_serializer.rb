class ApplicantJobSerializer < ActiveModel::Serializer
  attributes  attributes :id, :first_name, :last_name, :position, :email, :phone, :city, :state
end
