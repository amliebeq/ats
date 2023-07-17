class NoteSerializer < ActiveModel::Serializer
  attributes :id, :applicant_id, :user_id, :body,:created_at
end
