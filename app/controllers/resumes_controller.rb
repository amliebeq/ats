class ResumesController < ApplicationController
    def create
        resume = Resume.new(resume_params)
        resume.file.attach(params[:resume])
        if resume.save
            render json: resume, status: :created
        else
            render json: { errors: resume.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def resume_params
        params.permit(:applicant_id)
    end
end
