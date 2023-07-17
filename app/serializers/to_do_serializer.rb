class ToDoSerializer < ActiveModel::Serializer
  attributes :id, :item, :completed
end
