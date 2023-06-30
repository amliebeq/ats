class NoteSerializer < ActiveModel::Serializer
  attributes :id, :applicant_id, :user_id, :body
end
