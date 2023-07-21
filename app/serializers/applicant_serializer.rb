class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :email, :phone, :city, :state, :lists, :status, :notes, :jobs, :resume

  has_many :notes
  has_many :lists
  belongs_to :user
  has_many :jobs

  def resume
    rails_blob_path(object.resume, only_path: true) if object.resume.attached?
  end

end
