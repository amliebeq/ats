class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :pay_rate, :location, :company
end
