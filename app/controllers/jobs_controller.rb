class JobsController < ApplicationController
    def index
        jobs = Job.all
        render json: jobs, status: :ok
    end
    
    def create
        job = Job.create(job_params)
        if job.valid?
            render json: job, status: :created
        else
            render json: { errors: job.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        job = user.jobs.find_by(id: params[:id])
        if job.destroy
            render json: job
        else
            render json: { errors: job.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        job = user.jobs.find_by(id: params[:id])
        if job.update(job_params)
            render json: job, status: :created
        else
            render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def addApplicantToJob
        job = Job.find_by(id: params[:job_id].to_i)
        applicant = Applicant.find_by(id: params[:applicant_id])
        if job.applicants << applicant
            render json: {job_id: job.id, applicant_id: applicant.id}, status: :created
        else
            render json: { errors: job.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def removeApplicantFromJob
        applicant = Applicant.find_by(id: params[:applicant_id])
        job = Job.find_by(id: params[:job_id])
        if applicant.jobs.delete(job)
            render json: job, status: :ok
        else
            render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def job_params
        params.permit(:title, :description, :pay_rate, :location, :company, :user_id)
    end
end
