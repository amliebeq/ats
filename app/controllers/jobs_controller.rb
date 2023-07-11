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

    private
    def job_params
        params.permit(:title, :description, :pay_rate, :location, :company, :user_id)
    end
end
